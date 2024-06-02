import { useEffect, useRef, useState } from "react";
import { Sender } from "./Chat/Sender";
import { Receiver } from "./Chat/Receiver";
import { useUserStore } from "../lib/userStore";
import { updateDoc, arrayUnion, doc } from "firebase/firestore";
import { toast } from "react-toastify";
import { db } from "../lib/firebase";


function ChatContainer({ messages, friendInfo,setMessages, chatroomId }) {
  let msgs;
  const [inputValue, setInputValue] = useState('')
  const { currentUser } = useUserStore();

  //xử lý dữ liệu khi ấn enter hoặc nút gửi   
  const handleSendMessage = ()=>{ 
    if (inputValue) { 
      //lấy dữ liệu từ input chat
      const enteredMessage = inputValue
      const now = new Date()
      const hours = now.getHours() 
      const minutes = now.getMinutes()
  
      //gửi dữ liệu 
  
      setMessages([...messages,{
        uid: currentUser.ID,
        createdAt: `${hours}:${minutes}`,
        mes: inputValue
      }])
   
      //clear ô input
      setInputValue('')

      // TA Ghi dữ liệu lên db
      try {
              // Tham chiếu đến document của phòng chat
      const chatroomRef = doc(db, "Chatroom", chatroomId); // Giả sử bạn đã có chatroomId

       // Tạo object tin nhắn mới
      const newMessage = {
        SenderID: currentUser.ID,
        CreateAt: `${hours}:${minutes}`,
        Content: inputValue,
        isImage: false 
      };

      // Cập nhật mảng Message trong Firestore
       updateDoc(chatroomRef, {
        Message: arrayUnion(newMessage)
      });

      } catch (error) {
        console.error("Lỗi khi gửi tin nhắn:", error);
        toast("Lỗi khi gửi tin nhắn")
      }

    }
  }

  //bắt sự kiện khi ấn phím< 
  const handleChangeKey = (e) =>{ 
    if (e.key == 'Enter') { 
      handleSendMessage()
    }
  }

  if (messages) {
    console.log("message chunk: ")
    console.log(messages)
    msgs = messages.map((msg, index) => {  
      const isLastMessage =
        index === messages.length - 1 || messages[index + 1].uid !== msg.uid; // Kiểm tra isLastMessage chính xác hơn
      const isFirstMessage = index === 0 || messages[index - 1].uid !== msg.uid;
      // Render người gửi và người nhận
      return msg?.SenderID === currentUser.ID ? 
        <Sender
          msg={msg.Content}
          createdAt={msg.createdAt}
          isLast={isLastMessage}
          key={index}
        />
      : 
        <Receiver
          avatarReceiver={friendInfo.Avatar}
          nameReceiver={"Name"}
          msg={msg.Content}
          createAtReceiver={msg.createdAt}
          isLast={isLastMessage}
          isFirst={isFirstMessage}
          key={index}
        />
      
    });
  }

  const newestChat = useRef(null);

  useEffect(() => {
    if (newestChat.current) {
      newestChat.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]); // Chỉ cuộn khi messages thay đổi

  return (
    <>
      <div className="chat-conversation pb-5 pe-1 ps-5">
        <div className="flex h-[calc(100vh_-_120px)] flex-col">
          <div className="flex-1 overflow-y-scroll px-4 py-2">{msgs}
          
           {/* Đánh dấu để cuộn xuống đoạn chat mới nhất */}
           <div ref={newestChat} />
          </div>
          {/* Hien thi input chat */}
          <div className="chat-input-section border-t border-t-[#f5f7fb]">
            {/* Hiển thị hình ảnh đã chọn */}
            <div className="bg-[#fffcfc66] w-full ">
              <div className="photoContainer flex gap-2 w-full  h-[6rem]" >
                <div className="w-fit h-full relative">
                  <img className="w-auto bg-bs-dark h-full border-1 border-[#060375] rounded-2xl" src="./images/avatar-captain.jpg"/>
                  <button className="p-3 w-4 h-4 rounded-full absolute top-1 right-1 text-lg bg-black shadow">
                    <i className="fa-solid fa-circle-xmark -translate-x-1/2 -translate-y-1/2 absolute text-white"></i>
                    </button>
                </div>
               

              </div>
              <div className="w-fit h-full bg-[#fff] text-text-danger">
                  2 <b className="text-black">image selected </b>
              </div>
            </div> 
          <div className="bg-gray-100 px-4 py-2">
              <div className="flex items-center">
                <input
                  className="mr-2 w-full rounded bg-[#f5f7fb] px-4 py-2"
                  type="text"
                  placeholder="Type your message..."
                  value={inputValue}
                  onChange={(e)=> setInputValue(e.target.value)}
                  onKeyDown={(e)=> handleChangeKey(e)}
                />
                <div className="mx-3 text-[#7269ef]">
                <label htmlFor="imgImport" className="cursor-pointer">
                  <input type="file" id="imgImport" className="hidden "/>
                    <i className="fa-solid fa-paperclip"></i>
                  </label>

                </div>
                <div className="mx-6 text-[#7269ef]">
                  <label htmlFor="imgImport" className="cursor-pointer">
                    <input type="file" id="imgImport" className="hidden "/>
                    <i className="fa-regular fa-image"></i>
                  </label>
                </div>
                <button className="bg-blue-500 rounded bg-[#7269ef] px-4 py-2 font-medium text-white hover:bg-[#4f48a9]"
                  onClick={handleSendMessage}
                >
                  <i className="fa-regular fa-paper-plane"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ChatContainer;

// import { useEffect, useRef } from "react";
// import { Sender } from "./Chat/Sender";
// import { Receiver } from "./Chat/Receiver";
// function ChatContainer({messages,friendInfo}) {
//   let msgs

//   if (messages) {
//      msgs = messages.map((msg, index) => {
//        let isLastMessage = false;
//        let isFirstMessage = false;


/*
      const isLastMessage =
        index === messages.length - 1 || messages[index + 1].uid !== msg.uid; // Kiểm tra isLastMessage chính xác hơn
      const isFirstMessage = index === 0 || messages[index - 1].uid !== msg.uid;

*/
//        //TH1: tin nhắn đầu tiên của mảng hoặc đầu tiên của chuỗi tin nhắn
//        if (index == 0 || index + 1 != messages.length && index - 1 >= 0 && messages[index-1].uid != msg.uid) {
//          isFirstMessage = true
//         //  console.log('index: '+index)
//       }
//       //TH2: tin nhắn cuối cùng của chuỗi tin nhắn
//       else if (index + 1 < messages.length && messages[index + 1].uid != msg.uid) {
//         isLastMessage = true;
//       }
//       //TH3: tin nhắn cuối cùng của mảng
//       else if (index + 1 == messages.length){

//         isLastMessage = true;
//       }

//       //Render người gửi và người nhận
//       if (msg.uid !== friendInfo.uid) {
//         return <Sender msg={msg.mes} createdAt={msg.createdAt} isLast={isLastMessage} key={index}></Sender>;
//       }
//       return (
//         <Receiver
//           avatarReceiver={friendInfo.avatar}
//           nameReceiver={friendInfo.name}
//           msg={msg.mes}
//           createAtReceiver={msg.createdAt}
//           isLast={isLastMessage}
//           isFirst={isFirstMessage}
//           key={index}
//         ></Receiver>
//       );
//     });

//   }
//   //cuộn tới vị trí mới nhất
//   const newestChat = useRef(null);
//   useEffect(() => {
//     newestChat.current?.scrollIntoView({ behavior: "smooth" });
//   });

  // return (
  //   <>
  //     <div className="chat-conversation py-5 pe-1 ps-5">
  //       <div className="flex h-[calc(100vh_-_120px)] flex-col">
  //         {/* Hiển thị đoạn chat */}
  //         <div className=" flex-1 overflow-y-scroll">
  //           <div className="px-4 py-2">{msgs ?? msgs}</div>
  //           {/* Đánh dấu để cuộn xuống đoạn chat mới nhất */}
  //           <div className id="newestChat" ref={newestChat}></div>

  //           {/*  Input */}
  //         </div>
  //         <div className="chat-input-section border-t border-t-[#f5f7fb]">
  //           {/* form send */}
  //           <div className="bg-gray-100 px-4 py-2">
  //             <div className="flex items-center">
  //               <input
  //                 className="mr-2 w-full rounded bg-[#f5f7fb] px-4 py-2"
  //                 type="text"
  //                 placeholder="Type your message..."
  //               />
  //               <div className="mx-3 text-[#7269ef]">
  //               <label htmlFor="imgImport" className="cursor-pointer">
  //                 <input type="file" id="imgImport" className="hidden "/>
  //                   <i className="fa-solid fa-paperclip"></i>
  //                 </label>

  //               </div>
  //               <div className="mx-6 text-[#7269ef]">
  //                 <label htmlFor="imgImport" className="cursor-pointer">
  //                   <input type="file" id="imgImport" className="hidden "/>
  //                   <i className="fa-regular fa-image"></i>
  //                 </label>
  //               </div>
  //               <button className="bg-blue-500 rounded bg-[#7269ef] px-4 py-2 font-medium text-white hover:bg-[#4f48a9]">
  //                 <i className="fa-regular fa-paper-plane"></i>
  //               </button>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </>
  // );
// }
// export default ChatContainer;
