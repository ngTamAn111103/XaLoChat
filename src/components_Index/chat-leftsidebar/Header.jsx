export function Header({
    title,
    isSearch = false,


}) {
    return(
        <div className="px-6 pt-5">
        <h4 className="mb-6 text-[1.3125rem] font-semibold text-[#343a40]">
          Chats
        </h4>

        {/* Search */}
        {
        isSearch 
        &&
        (
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
        )
        }
        
      </div>
    )
}