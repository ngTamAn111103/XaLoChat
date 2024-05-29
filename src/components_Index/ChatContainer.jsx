import { useEffect, useRef } from "react";
import { Sender } from "./Chat/Sender";
import { Receiver } from "./Chat/Receiver";
function ChatContainer({messages}) {
  //dữ liệu giả cho chat
  const myName = "isMe";
  let msgs 
  if (messages) { 
     msgs = messages.map((msg, index) => {
      let isLastMessage = false;
      let isFirstMessage = false;
      //TH1: tin nhắn đầu tiên của mảng hoặc đầu tiên của chuỗi tin nhắn 
      if (index == 0 || index - 1 >= 0 && messages[index-1].name != msg.name) { 
        isFirstMessage = true
      }
      //TH2: tin nhắn cuối cùng của chuỗi tin nhắn 
      else if (index + 1 < messages.length && messages[index + 1].name != msg.name) {
        isLastMessage = true;
      }
      //TH3: tin nhắn cuối cùng của mảng
      else if (index + 1 ==messages.length){ 
        isLastMessage = true;
      }
  
      //Render người gửi và người nhận 
      if (msg.name === myName) {
        return <Sender msg={msg.mes} createdAt={msg.createdAt} isLast={isLastMessage}></Sender>;
      }
      return (
        <Receiver
          avatarReceiver={msg.avatar}
          nameReceiver={msg.name}
          msg={msg.mes}
          createAtReceiver={msg.createdAt}
          isLast={isLastMessage}
          isFirst={isFirstMessage}
        ></Receiver>
      );
    });

  }
  //cuộn tới vị trí mới nhất
  const newestChat = useRef(null);
  useEffect(() => {
    newestChat.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <>
      <div className="chat-conversation py-5 pe-1 ps-5">
        <div class="flex h-[calc(100vh_-_120px)] flex-col">
          {/* Hiển thị đoạn chat */}
          <div class=" flex-1 overflow-y-scroll">
            <div class="px-4 py-2">{msgs ?? msgs}</div>
            {/* Đánh dấu để cuộn xuống đoạn chat mới nhất */}
            <div className id="newestChat" ref={newestChat}></div>

            {/*  Input */}
          </div>
          <div className="chat-input-section border-t border-t-[#f5f7fb]">
            {/* form send */}
            <div class="bg-gray-100 px-4 py-2">
              <div class="flex items-center">
                <input
                  class="mr-2 w-full rounded bg-[#f5f7fb] px-4 py-2"
                  type="text"
                  placeholder="Type your message..."
                />
                <div className="mx-3 text-[#7269ef]">
                <label htmlFor="imgImport" className="cursor-pointer">
                  <input type="file" id="imgImport" className="hidden "/>
                    <i class="fa-solid fa-paperclip"></i>
                  </label>
                 
                </div>
                <div className="mx-6 text-[#7269ef]">
                  <label htmlFor="imgImport" className="cursor-pointer">
                    <input type="file" id="imgImport" className="hidden "/>
                    <i class="fa-regular fa-image"></i>
                  </label>
                </div>
                <button class="bg-blue-500 rounded bg-[#7269ef] px-4 py-2 font-medium text-white hover:bg-[#4f48a9]">
                  <i class="fa-regular fa-paper-plane"></i>
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
