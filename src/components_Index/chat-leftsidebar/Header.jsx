export function Header({
  title,
  isSearch = false,
  placeholderSearch = "",
  // Phần mở rộng bên tay phải chung hàng với heading
  extend,
}) {
  return (
    <div className="ps-5 pe-2 lg:px-6 pt-5">
      {extend}
      <h4 className="mb-6 text-[1.3125rem] font-semibold text-[#343a40]">
        {title}
      </h4>

      {/* Search */}
      {isSearch && (
        <div className="search mb-4 flex me-2 lg:me-0">
          <span className="justify-center whitespace-nowrap rounded-s border-[#f0eff5] bg-[#e6ebf5] py-3   pe-2 ps-4 text-center text-sm font-normal text-[#7a7f9a]">
            <i className="fa-solid fa-magnifying-glass"></i>
          </span>
          <input
            type="text"
            className="leading-2 flex-1 rounded-e border-[#f0eff5] bg-[#e6ebf5] py-3 pe-2 ps-4 text-sm font-normal text-[#7a7f9a] focus:outline-none"
            placeholder={placeholderSearch}
          />
        </div>
      )}
    </div>
  );
}
