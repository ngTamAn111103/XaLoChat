import OnlineFriend from "./OnlineFriend";
function FriendList() {
  return (
    <>
      {/* title */}
      <div className="px-6 pt-5">
        <h4
          className="mb-5 text-[1.3125rem] font-semibold"
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
            className="py-3 pe-2 ps-4 text-sm text-[#7a7f9a] bg-[#e6ebf5] border-[#f0eff5] flex-1 rounded-e font-normal leading-2" placeholder="Search messages or users"
          />
        </div>
      </div>

      {/* Online Friends */}
      <div className="">
        <ul className="px-6 pt-1 flex">
            <OnlineFriend />
            <OnlineFriend />
            <OnlineFriend />
            <OnlineFriend />
        </ul>

      </div>
      {/* Recent */}
      <h5 className="px-5 pt-5 font-medium">Recent</h5>
    </>
  );
}

export default FriendList;
