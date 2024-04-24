import Conversation from "./Conversation";
import OnlineFriend from "./OnlineFriend";

function FriendList() {
  return (
    <>
      {/* title */}
      <div className="px-6 pt-5">
        <h4
          className="mb-6 text-[1.3125rem] text-[#343a40] font-semibold"
          >
          Chats
        </h4>

        {/* Search */}
        <div className="search mb-4 flex">
          <span className="whitespace-nowrap rounded-s border-[#f0eff5] bg-[#e6ebf5] py-3 pe-2   ps-4 text-sm font-normal text-[#7a7f9a] text-center justify-center">
            <i className="fa-solid fa-magnifying-glass"></i>
          </span>
          <input
            type="text"
            className="py-3 pe-2 ps-4 text-sm text-[#7a7f9a] bg-[#e6ebf5] border-[#f0eff5] flex-1 rounded-e font-normal leading-2 focus:outline-none" placeholder="Search messages or users"
          />
        </div>
      </div>

      {/* Online Friends */}
      <div className="">
        <ul className="px-5 flex space-content-around">
            <OnlineFriend />
            <OnlineFriend name="Nguyen..."/>
            <OnlineFriend />
            <OnlineFriend />
        </ul>

      </div>
      {/* Recent Friend*/}
      <h5 className="px-5 pt-4 font-medium mb-5 text-[#343a40]">Recent</h5>
      <div className="list-chat overflow-auto h-[calc(100vh_-_270px)] scroll-smooth focus:scroll-auto">
        <ul>
          <Conversation isOnline={true} isSelected={true}/>
          <Conversation notifycation={1} name="Lorem ipsum, dolor sit... " newestMessage="Lorem ipsum, dolor sit ..."/>
          <Conversation isOnline={true} notifycation={3} avatar="avatar-tinder.jpg" name="Tinder" newestMessage="Tải app tìm bạn ngay" time="09:00 PM" isSentFile={true}/>
          <Conversation isSentImage= {true} notifycation={2} avatar="avatar-girl.jpg" name="Em" newestMessage="Hello anh cho em lên thuyền..."/>
          <Conversation isSentImage= {true} notifycation={2} avatar="avatar-girl.jpg" name="Em" newestMessage="Hello anh cho em lên thuyền..."/>
          <Conversation isSentImage= {true} notifycation={2} avatar="avatar-girl.jpg" name="Em" newestMessage="Hello anh cho em lên thuyền..."/>
         
          <Conversation isSentImage= {true} notifycation={2} avatar="avatar-girl.jpg" name="Em" newestMessage="Hello anh cho em lên thuyền..."/>
          <Conversation isSentImage= {true} notifycation={2} avatar="avatar-girl.jpg" name="Em" newestMessage="Hello anh cho em lên thuyền..."/>
         
          <Conversation isSentImage= {true} notifycation={2} avatar="avatar-girl.jpg" name="Em" newestMessage="Hello anh cho em lên thuyền..."/>
          <Conversation isSentImage= {true} notifycation={2} avatar="avatar-girl.jpg" name="Em" newestMessage="Hello anh cho em lên thuyền..."/>
         
          <Conversation isSentImage= {true} notifycation={2} avatar="avatar-girl.jpg" name="Em" newestMessage="Hello anh cho em lên thuyền..."/>
          <Conversation isSentImage= {true} notifycation={2} avatar="avatar-girl.jpg" name="Em" newestMessage="Hello anh cho em lên thuyền..."/>
         
          <Conversation isSentImage= {true} notifycation={2} avatar="avatar-girl.jpg" name="Em" newestMessage="Hello anh cho em lên thuyền..."/>
          <Conversation isSentImage= {true} notifycation={2} avatar="avatar-girl.jpg" name="Em" newestMessage="Hello anh cho em lên thuyền..."/>
         
          <Conversation isSentImage= {true} notifycation={2} avatar="avatar-girl.jpg" name="Em" newestMessage="Hello anh cho em lên thuyền..."/>
          <Conversation isSentImage= {true} notifycation={2} avatar="avatar-girl.jpg" name="Em" newestMessage="Hello anh cho em lên thuyền..."/>
         
          <Conversation isSentImage= {true} notifycation={2} avatar="avatar-girl.jpg" name="Em" newestMessage="Hello anh cho em lên thuyền..."/>
          <Conversation isSentImage= {true} notifycation={2} avatar="avatar-girl.jpg" name="Em" newestMessage="Hello anh cho em lên thuyền..."/>
         
          <Conversation isSentImage= {true} notifycation={2} avatar="avatar-girl.jpg" name="Em" newestMessage="Hello anh cho em lên thuyền..."/>
          <Conversation isSentImage= {true} notifycation={2} avatar="avatar-girl.jpg" name="Em" newestMessage="Hello anh cho em lên thuyền..."/>
         
          <Conversation isSentImage= {true} notifycation={2} avatar="avatar-girl.jpg" name="Em" newestMessage="Hello anh cho em lên thuyền..."/>
          <Conversation isSentImage= {true} notifycation={2} avatar="avatar-girl.jpg" name="Em" newestMessage="Hello anh cho em lên thuyền..."/>
         
          <Conversation isSentImage= {true} notifycation={2} avatar="avatar-girl.jpg" name="Em" newestMessage="Hello anh cho em lên thuyền..."/>
          <Conversation isSentImage= {true} notifycation={2} avatar="avatar-girl.jpg" name="Em" newestMessage="Hello anh cho em lên thuyền..."/>
         
          <Conversation isSentImage= {true} notifycation={2} avatar="avatar-girl.jpg" name="Em" newestMessage="Hello anh cho em lên thuyền..."/>
          <Conversation isSentImage= {true} notifycation={2} avatar="avatar-girl.jpg" name="Em" newestMessage="Hello anh cho em lên thuyền..."/>
         
          <Conversation isSentImage= {true} notifycation={2} avatar="avatar-girl.jpg" name="Em" newestMessage="Hello anh cho em lên thuyền..."/>
          <Conversation isSentImage= {true} notifycation={2} avatar="avatar-girl.jpg" name="Em" newestMessage="Hello anh cho em lên thuyền..."/>
         
          <Conversation isSentImage= {true} notifycation={2} avatar="avatar-girl.jpg" name="Em" newestMessage="Hello anh cho em lên thuyền..."/>
          <Conversation isSentImage= {true} notifycation={2} avatar="avatar-girl.jpg" name="Em" newestMessage="Hello anh cho em lên thuyền..."/>
         
          <Conversation isSentImage= {true} notifycation={2} avatar="avatar-girl.jpg" name="Em" newestMessage="Hello anh cho em lên thuyền..."/>
          <Conversation isSentImage= {true} notifycation={2} avatar="avatar-girl.jpg" name="Em" newestMessage="Hello anh cho em lên thuyền..."/>
         
          <Conversation isSentImage= {true} notifycation={2} avatar="avatar-girl.jpg" name="Em" newestMessage="Hello anh cho em lên thuyền..."/>
          <Conversation isSentImage= {true} notifycation={2} avatar="avatar-girl.jpg" name="Em" newestMessage="Hello anh cho em lên thuyền..."/>
         
          <Conversation isSentImage= {true} notifycation={2} avatar="avatar-girl.jpg" name="Em" newestMessage="Hello anh cho em lên thuyền..."/>
          <Conversation isSentImage= {true} notifycation={2} avatar="avatar-girl.jpg" name="Em" newestMessage="Hello anh cho em lên thuyền..."/>
         
          <Conversation isSentImage= {true} notifycation={2} avatar="avatar-girl.jpg" name="Em" newestMessage="Hello anh cho em lên thuyền..."/>
          <Conversation isSentImage= {true} notifycation={2} avatar="avatar-girl.jpg" name="Em" newestMessage="Hello anh cho em lên thuyền..."/>
         
          <Conversation isSentImage= {true} notifycation={2} avatar="avatar-girl.jpg" name="Em" newestMessage="Hello anh cho em lên thuyền..."/>
          <Conversation isSentImage= {true} notifycation={2} avatar="avatar-girl.jpg" name="Em" newestMessage="Hello anh cho em lên thuyền..."/>
         
          <Conversation isSentImage= {true} notifycation={2} avatar="avatar-girl.jpg" name="Em" newestMessage="Hello anh cho em lên thuyền..."/>
          <Conversation isSentImage= {true} notifycation={2} avatar="avatar-girl.jpg" name="Em" newestMessage="Hello anh cho em lên thuyền..."/>
         
          <Conversation isSentImage= {true} notifycation={2} avatar="avatar-girl.jpg" name="Em" newestMessage="Hello anh cho em lên thuyền..."/>
          <Conversation isSentImage= {true} notifycation={2} avatar="avatar-girl.jpg" name="Em" newestMessage="Hello anh cho em lên thuyền..."/>
         
          <Conversation isSentImage= {true} notifycation={2} avatar="avatar-girl.jpg" name="Em" newestMessage="Hello anh cho em lên thuyền..."/>
          <Conversation isSentImage= {true} notifycation={2} avatar="avatar-girl.jpg" name="Em" newestMessage="Hello anh cho em lên thuyền..."/>
         
          <Conversation isSentImage= {true} notifycation={2} avatar="avatar-girl.jpg" name="Em" newestMessage="Hello anh cho em lên thuyền..."/>
          <Conversation isSentImage= {true} notifycation={2} avatar="avatar-girl.jpg" name="Em" newestMessage="Hello anh cho em lên thuyền..."/>
         
          <Conversation isSentImage= {true} notifycation={2} avatar="avatar-girl.jpg" name="Em" newestMessage="Hello anh cho em lên thuyền..."/>
          <Conversation isSentImage= {true} notifycation={2} avatar="avatar-girl.jpg" name="Em" newestMessage="Hello anh cho em lên thuyền..."/>
         
          <Conversation isSentImage= {true} notifycation={2} avatar="avatar-girl.jpg" name="Em" newestMessage="Hello anh cho em lên thuyền..."/>
          <Conversation isSentImage= {true} notifycation={2} avatar="avatar-girl.jpg" name="Em" newestMessage="Hello anh cho em lên thuyền..."/>
         
          <Conversation isSentImage= {true} notifycation={2} avatar="avatar-girl.jpg" name="Em" newestMessage="Hello anh cho em lên thuyền..."/>
          <Conversation isSentImage= {true} notifycation={2} avatar="avatar-girl.jpg" name="Em" newestMessage="Hello anh cho em lên thuyền..."/>
         
          <Conversation isSentImage= {true} notifycation={2} avatar="avatar-girl.jpg" name="Em" newestMessage="Hello anh cho em lên thuyền..."/>
          <Conversation isSentImage= {true} notifycation={2} avatar="avatar-girl.jpg" name="Em" newestMessage="Hello anh cho em lên thuyền..."/>
         
          <Conversation isSentImage= {true} notifycation={2} avatar="avatar-girl.jpg" name="Em" newestMessage="Hello anh cho em lên thuyền..."/>
          <Conversation isSentImage= {true} notifycation={2} avatar="avatar-girl.jpg" name="Em" newestMessage="Hello anh cho em lên thuyền..."/>
         
          <Conversation isSentImage= {true} notifycation={2} avatar="avatar-girl.jpg" name="Em" newestMessage="Hello anh cho em lên thuyền..."/>
          <Conversation isSentImage= {true} notifycation={2} avatar="avatar-girl.jpg" name="Em" newestMessage="Hello anh cho em lên thuyền..."/>
         
          <Conversation isSentImage= {true} notifycation={2} avatar="avatar-girl.jpg" name="Em" newestMessage="Hello anh cho em lên thuyền..."/>
          <Conversation isSentImage= {true} notifycation={2} avatar="avatar-girl.jpg" name="Em" newestMessage="Hello anh cho em lên thuyền..."/>
         
          <Conversation isSentImage= {true} notifycation={2} avatar="avatar-girl.jpg" name="Em" newestMessage="Hello anh cho em lên thuyền..."/>
          <Conversation isSentImage= {true} notifycation={2} avatar="avatar-girl.jpg" name="Em" newestMessage="Hello anh cho em lên thuyền..."/>
         
          <Conversation isSentImage= {true} notifycation={2} avatar="avatar-girl.jpg" name="Em" newestMessage="Hello anh cho em lên thuyền..."/>
          <Conversation isSentImage= {true} notifycation={2} avatar="avatar-girl.jpg" name="Em" newestMessage="Hello anh cho em lên thuyền..."/>
         
        </ul>
      </div>
    </>
  );
}

export default FriendList;
