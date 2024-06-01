import { useEffect, useState } from "react";
import { doc, getDoc, onSnapshot } from "firebase/firestore";
import Conversation from "./Conversation";
import OnlineFriend from "./OnlineFriend";
import { useUserStore } from "../../lib/userStore";
import { db } from "../../lib/firebase";

function FriendList({ isActive, clickedButton, setClickedButton, friendlist }) {
  // Lấy người dùng hiện tại
  const { currentUser } = useUserStore();
  const [chats, setChats] = useState([]);
  // 1 Object lưu trữ thông tin đối phương cho mỗi cuộc trò chuyện với key là ID phòng
  const [receiverInfos, setReceiverInfos] = useState({});
  useEffect(() => {
    // Lấy danh sách ID phòng chat của người dùng hiện tại
    const listChatroomID = currentUser?.Chatroom || []; // Xử lý trường hợp currentUser chưa được load

    // Tạo một mảng chứa các unsubscribe functions để sau này dọn dẹp
    const unsubscribeFunctions = [];

    // Lắng nghe sự thay đổi của từng phòng chat trong listChatroomID
    listChatroomID.forEach((chatroomId) => {
      const unsubscribe = onSnapshot(doc(db, "Chatroom", chatroomId), (doc) => {
        if (doc.exists()) {
          const chatroomData = doc.data();
          // Cập nhật trạng thái chats, bạn có thể thêm logic để xử lý tin nhắn mới nhất, trạng thái online, ...
          setChats((prevChats) => {
            const index = prevChats.findIndex((chat) => chat.id === chatroomId);
            if (index > -1) {
              // Nếu phòng chat đã tồn tại trong danh sách, cập nhật nó
              prevChats[index] = { id: chatroomId, ...chatroomData };
            } else {
              // Nếu phòng chat chưa tồn tại, thêm nó vào đầu danh sách
              prevChats.unshift({ id: chatroomId, ...chatroomData });
            }
            return [...prevChats];
          });
        }
      });
      unsubscribeFunctions.push(unsubscribe); // Thêm unsubscribe function vào mảng
    });

    // Dọn dẹp khi component unmount
    return () => {
      unsubscribeFunctions.forEach((unsubscribe) => unsubscribe());
    };
  }, [currentUser]); // Lắng nghe lại khi currentUser thay đổi (khi đăng nhập/đăng xuất)

  useEffect(() => {
    const fetchReceiverInfos = async () => {
      const newReceiverInfos = {};
      // Lặp qua từng chat trong chats
      for (const chat of chats) {
        // Kiểm tra ko phải nhóm chat
        if (!chat.isGroup) {
          // Lấy ID người còn lại
          const otherMembers = chat.Members.filter(
            (member) => member !== currentUser.ID,
          );
          const receiverId = otherMembers[0];
          // lấy profile người còn lại
          const docRef = doc(db, "Profile", receiverId);
          const docSnap = await getDoc(docRef);

          if (docSnap.exists()) {
            newReceiverInfos[chat.id] = docSnap.data();
          }
        }
      }
      setReceiverInfos(newReceiverInfos);
    };

    fetchReceiverInfos();
  }, [chats, currentUser.ID]);

  let arrOnline = [];
  //nhận danh sách đầu vào và Map mảng chuẩn bị render
  // TA: chats: mảng các đoạn chat của thằng người dùng đã có
  // const listFriend = friendlist?.map((e, i) => {
  const listFriend = chats?.map((e, i) => {
    if (e.isOnline == true) {
      arrOnline.push(
        <OnlineFriend
          avatar={e.avatar}
          name={e.name.length > 8 ? e.name.substring(0, 8) + "..." : e.name}
        />,
      );
    }

    // Nếu không phải group
    if (!e.isGroup) {
      // Loại bỏ ID của người dùng hiện tại
      const receiverId = e.Members.filter(
        (member) => member !== currentUser.ID,
      )[0];

      // Lấy thông tin đối phương

      getDoc(doc(db, "Profile", receiverId)).then((docSnap) => {
        if (docSnap.exists()) {
          console.log(
            "FriendList.jsx: Thông tin đối phương của chat 1-1:",
            docSnap.data(),
          );
        } else {
          console.log("FriendList.jsx: Lỗi truy vấn đối phương của chat 1-1");
        }
      });
    }
    // Sử dụng receiverInfo từ state
    const receiverInfo = receiverInfos[e.id];

    return (
      <Conversation
        avatar={e.isGroup ? null : receiverInfo?.Avatar}
        notifycation={e.notifycation}
        isOnline={e.isOnline}
        name={e.isGroup ? e.Name : receiverInfo?.Fullname} // Sử dụng receiverInfo (không còn là Promise)
        newestMessage={e.newestMessage}
        time={e.time}
        onClickFriend={() => handleClickButton(i)}
        isSentImage={e.isSentImage ? true : false}
        isSentFile={e.isSentFile ? true : false}
        isSelected={i == clickedButton ? true : false}
        key={i}
      />
    );
  });

  function handleClickButton(order) {
    setClickedButton(order);
  }

  return (
    <>
      <div className={isActive ? "block" : "hidden"}>
        {/* title */}
        <div className="px-6 pt-5">
          <h4 className="mb-6 text-[1.3125rem] font-semibold text-[#343a40]">
            Chats
          </h4>

          {/* Search */}
          <div className="search mb-4 flex">
            <span className="justify-center whitespace-nowrap rounded-s border-[#f0eff5] bg-[#e6ebf5] py-3   pe-2 ps-4 text-center text-sm font-normal text-[#7a7f9a]">
              <i className="fa-solid fa-magnifying-glass"></i>
            </span>
            <input
              type="text"
              className="leading-2 flex-1 rounded-e border-[#f0eff5] bg-[#e6ebf5] py-3 pe-2 ps-4 text-sm font-normal text-[#7a7f9a] focus:outline-none"
              placeholder="Search messages or users"
            />
          </div>
        </div>

        {/* Online Friends */}
        <div className="">
          <ul className="space-content-around flex px-5">{...arrOnline}</ul>
        </div>
        {/* Recent Friend*/}
        <h5 className="mb-5 px-5 pt-4 font-medium text-[#343a40]">Recent</h5>
        <div className="list-chat h-[calc(100vh_-_270px)] overflow-auto scroll-smooth focus:scroll-auto">
          <ul>{listFriend ?? listFriend}</ul>
        </div>
      </div>
    </>
  );
}

export default FriendList;
