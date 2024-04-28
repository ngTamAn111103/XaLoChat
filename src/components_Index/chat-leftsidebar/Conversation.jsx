function Conversation({
  avatar = "avatar-captain.jpg",
  name = "Lù Phi",
  time = "03:00 AM",
  newestMessage = "Ra khơi em ơi!",
  isSelected = false,
  isOnline = false,
  notifycation = 0,
  isSentImage = false,
  isSentFile = false,
}) {
  return (
    <>
      <li className="px-2">
        <a
          href="#"
          className={`mb-[0.125rem] block rounded px-5 py-4 transition hover:bg-[#e6ebf5] ${isSelected ? "bg-[#e6ebf5]" : ""}`}
        >
          <div className="flex items-center">
            {/* Avatar  */}
            <div className="avatar relative ">
              <img
                src={`images/` + avatar}
                alt="err"
                className="h-9  w-9 rounded-full"
              />
              {isOnline ? (
                <span className="absolute right-0 block h-2.5 w-2.5 translate-y-[-50%] rounded-full border-2 border-[#fff] bg-[#06d6a0]"></span>
              ) : (
                ""
              )}
            </div>
            {/* Name, Newest messsage */}
            <div className="ms-4 flex-1">
              <div className="text-[.9375rem] font-semibold">{name}</div>
              <div className="text-sm text-[#7a7f9a]">
                {isSentImage ? <i class="fa-regular fa-image me-1"></i> : ""}

                {isSentFile ? <i class="fa-solid fa-paperclip me-1"></i> : ""}
                {newestMessage}
              </div>
            </div>
            {/* Time */}
            <div className="time relative self-start text-xs text-[#7a7f9a]">
              {time}
              {notifycation ? (
                <span className="text-x absolute right-[50%] top-[50%] translate-x-[50%]  translate-y-[80%] rounded-full bg-[#ef476f2e] px-2 font-semibold text-[#ef476f]">
                  {notifycation}
                </span>
              ) : (
                ""
              )}
            </div>
          </div>
        </a>
      </li>
    </>
  );
}
export default Conversation;
