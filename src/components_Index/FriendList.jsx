import Conversation from "./Conversation";
import OnlineFriend from "./OnlineFriend";
import { Header } from "./chat-leftsidebar/Header";

function FriendList() {
  return (
    <>
      {/* title */}
      <Header
        title="Chats"
        isSearch ={true}
      />

      {/* Online Friends */}
      <div className="">
        <ul className="space-content-around flex px-5">
          <OnlineFriend />
          <OnlineFriend name="Nguyen..." />
          <OnlineFriend />
          <OnlineFriend />
        </ul>
      </div>
      {/* Recent Friend*/}
      <h5 className="mb-5 px-5 pt-4 font-medium text-[#343a40]">Recent</h5>
      <div className="list-chat h-[calc(100vh_-_270px)] overflow-auto scroll-smooth focus:scroll-auto">
        <ul>
          <Conversation isOnline={true} isSelected={true} />
          <Conversation
            notifycation={1}
            name="Lorem ipsum, dolor sit... "
            newestMessage="Lorem ipsum, dolor sit ..."
          />
          <Conversation
            isOnline={true}
            notifycation={3}
            avatar="avatar-tinder.jpg"
            name="Tinder"
            newestMessage="Tải app tìm bạn ngay"
            time="09:00 PM"
            isSentFile={true}
          />
          <Conversation
            isSentImage={true}
            notifycation={2}
            avatar="avatar-girl.jpg"
            name="Em"
            newestMessage="Hello anh cho em lên thuyền..."
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
        </ul>
      </div>
    </>
  );
}

export default FriendList;
