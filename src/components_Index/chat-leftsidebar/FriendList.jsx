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

  useEffect(() => {
    const unsub = onSnapshot(doc(db, "ChatRoom", currentUser.ID),async (res) => {
      const items = res.data().chats;

      const promisses = items.map(async(item)=>{
        const userDocRef = doc(db, 'Profile', item.receiverID);
        const userDocSnap = await getDoc(userDocRef);

        const user = userDocRef.data()

        return {...items, user};
      });
      const chatData = await Promise.all(promisses);
      setChats(chatData.sort((a,b) => b.updatedAt - a.updatedAt));
    });

    return () => {
      unsub();
    };
  }, [currentUser.id]);
  // console.log("FriendList.jsx:");
  // console.log(chats);

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
    return (
      <Conversation
        avatar={e.avatar}
        notifycation={e.notifycation}
        isOnline={e.isOnline}
        name={e.name}
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

{
  /* <ul>
  <Conversation isOnline={true}
   isSelected={clickedButton == 1 ? true : false}
   onClickFriend={()=>handleClickButton(1)}
   />
  <Conversation
    notifycation={1}
    name="Lorem ipsum, dolor sit... "
    newestMessage="Lorem ipsum, dolor sit ..."
    onClickFriend={()=>handleClickButton(2)}
    isSelected={clickedButton == 2 ? true : false}
  />
  <Conversation
    isOnline={true}
    notifycation={3}
    avatar="avatar-tinder.jpg"
    name="Tinder"
    newestMessage="Tải app tìm bạn ngay"
    time="09:00 PM"
    onClickFriend={()=>handleClickButton(3)}
    isSelected={clickedButton == 3 ? true : false}
    isSentFile={true}
  />
  <Conversation
    isSentImage={true}
    notifycation={2}
    avatar="avatar-girl.jpg"
    name="Em"
    newestMessage="Hello anh cho em lên thuyền..."
    onClickFriend={()=>handleClickButton(4) } 
    isSelected={clickedButton == 4 ? true : false}
  />
  <Conversation
  notifycation="99+"
  avatar="422673745_1431738810981438_8560367173620224784_n.jpg"
  name="Em iu"
  newestMessage="Nhớ anh Tâm An quá..."
/>
<Conversation
  notifycation="99+"
  avatar="428618563_757557076329500_7155410430265501585_n.jpg"
  name="Dương Bảo Khanh"
  newestMessage="A đặt bàn thọc bida lúc 12h đúng ko"
/>
<Conversation
  notifycation="99+"
  avatar="320186702_823742058729606_3659513607149413256_n.jpg"
  name="Bé iu 2"
  newestMessage="Nhớ anh"
/>
<Conversation
  notifycation="99+"
  avatar="IMG_5226.jpg"
  name="Shipper Shoppe"
  newestMessage="Nợ anh 2 củ tỏi nha em"
/>
<Conversation
  notifycation="99+"
  avatar="IMG_5226.jpg"
  name="Shipper Shoppe"
  newestMessage="Nợ anh 2 củ tỏi nha em"
/>
<Conversation
  notifycation="99+"
  avatar="IMG_5226.jpg"
  name="Shipper Shoppe"
  newestMessage="Nợ anh 2 củ tỏi nha em"
/>
<Conversation
  notifycation="99+"
  avatar="IMG_5226.jpg"
  name="Shipper Shoppe"
  newestMessage="Nợ anh 2 củ tỏi nha em"
/>
<Conversation
  notifycation="99+"
  avatar="IMG_5226.jpg"
  name="Shipper Shoppe"
  newestMessage="Nợ anh 2 củ tỏi nha em"
/>
<Conversation
  notifycation="99+"
  avatar="IMG_5226.jpg"
  name="Shipper Shoppe"
  newestMessage="Nợ anh 2 củ tỏi nha em"
/>
<Conversation
  notifycation="99+"
  avatar="IMG_5226.jpg"
  name="Shipper Shoppe"
  newestMessage="Nợ anh 2 củ tỏi nha em"
/>
<Conversation
  notifycation="99+"
  avatar="IMG_5226.jpg"
  name="Shipper Shoppe"
  newestMessage="Nợ anh 2 củ tỏi nha em"
/>
<Conversation
  notifycation="99+"
  avatar="IMG_5226.jpg"
  name="Shipper Shoppe"
  newestMessage="Nợ anh 2 củ tỏi nha em"
/>
<Conversation
  notifycation="99+"
  avatar="IMG_5226.jpg"
  name="Shipper Shoppe"
  newestMessage="Nợ anh 2 củ tỏi nha em"
/>
<Conversation
  notifycation="99+"
  avatar="IMG_5226.jpg"
  name="Shipper Shoppe"
  newestMessage="Nợ anh 2 củ tỏi nha em"
/>
<Conversation
  notifycation="99+"
  avatar="IMG_5226.jpg"
  name="Shipper Shoppe"
  newestMessage="Nợ anh 2 củ tỏi nha em"
/>
<Conversation
  notifycation="99+"
  avatar="IMG_5226.jpg"
  name="Shipper Shoppe"
  newestMessage="Nợ anh 2 củ tỏi nha em"
/>
<Conversation
  notifycation="99+"
  avatar="IMG_5226.jpg"
  name="Shipper Shoppe"
  newestMessage="Nợ anh 2 củ tỏi nha em"
/>
<Conversation
  notifycation="99+"
  avatar="IMG_5226.jpg"
  name="Shipper Shoppe"
  newestMessage="Nợ anh 2 củ tỏi nha em"
/>
<Conversation
  notifycation="99+"
  avatar="IMG_5226.jpg"
  name="Shipper Shoppe"
  newestMessage="Nợ anh 2 củ tỏi nha em"
/>
<Conversation
  notifycation="99+"
  avatar="IMG_5226.jpg"
  name="Shipper Shoppe"
  newestMessage="Nợ anh 2 củ tỏi nha em"
/>
<Conversation
  notifycation="99+"
  avatar="IMG_5226.jpg"
  name="Shipper Shoppe"
  newestMessage="Nợ anh 2 củ tỏi nha em"
/>
<Conversation
  notifycation="99+"
  avatar="IMG_5226.jpg"
  name="Shipper Shoppe"
  newestMessage="Nợ anh 2 củ tỏi nha em"
/>
<Conversation
  notifycation="99+"
  avatar="IMG_5226.jpg"
  name="Shipper Shoppe"
  newestMessage="Nợ anh 2 củ tỏi nha em"
/>
<Conversation
  notifycation="99+"
  avatar="IMG_5226.jpg"
  name="Shipper Shoppe"
  newestMessage="Nợ anh 2 củ tỏi nha em"
/>
<Conversation
  notifycation="99+"
  avatar="IMG_5226.jpg"
  name="Shipper Shoppe"
  newestMessage="Nợ anh 2 củ tỏi nha em"
/>
<Conversation
  notifycation="99+"
  avatar="IMG_5226.jpg"
  name="Shipper Shoppe"
  newestMessage="Nợ anh 2 củ tỏi nha em"
/>
<Conversation
  notifycation="99+"
  avatar="IMG_5226.jpg"
  name="Shipper Shoppe"
  newestMessage="Nợ anh 2 củ tỏi nha em"
/>
<Conversation
  notifycation="99+"
  avatar="IMG_5226.jpg"
  name="Shipper Shoppe"
  newestMessage="Nợ anh 2 củ tỏi nha em"
/>
<Conversation
  notifycation="99+"
  avatar="IMG_5226.jpg"
  name="Shipper Shoppe"
  newestMessage="Nợ anh 2 củ tỏi nha em"
/>
<Conversation
  notifycation="99+"
  avatar="IMG_5226.jpg"
  name="Shipper Shoppe"
  newestMessage="Nợ anh 2 củ tỏi nha em"
/>
<Conversation
  notifycation="99+"
  avatar="IMG_5226.jpg"
  name="Shipper Shoppe"
  newestMessage="Nợ anh 2 củ tỏi nha em"
/>
</ul> */
}
