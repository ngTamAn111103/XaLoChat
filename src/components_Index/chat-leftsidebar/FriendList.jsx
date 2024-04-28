import Conversation from "./Conversation";
import OnlineFriend from "./OnlineFriend";

function FriendList() {
  return (
    <>
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
        </ul>
      </div>
    </>
  );
}

export default FriendList;
