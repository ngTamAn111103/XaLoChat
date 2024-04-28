/* 
    Component OptionContact render 1 danh sách gồm options bên trong
    @param1: index: dùng để đặt tên cho nút và hiển thị menu
*/
function OptionContact({ index = 1 }) {


  return (
    <>
    {/* Tạo nút bấm để hiển thị hộp thoại */}
      <button
        id={"dropdownDefaultButton" + index}
        data-dropdown-toggle={"dropdown" + index}
        className="px-2 py-1 text-sm font-medium focus:outline-none"
        type="button"
      >
        <i className="fa fa-ellipsis-vertical" style={{ color: "#7a7f9a" }}></i>
      </button>
    {/* tạo hộp thoại và ẩn đi cho đến khi được ấn */}
      <div id={"dropdown" + index} className="hidden dropdown-menu shadow" > 
        <ul
          className="text-sm bg-white py-2 w-40  text-[#495057] rounded"
          aria-labelledby={"dropdownDefaultButton" + index}
        >
          <li className="px-6 py-[0.3125rem] hover:bg-[#f8f9fa] transition-all">
            <a href="#" className="flex justify-between font-normal text-[0.9375rem] ">
                Share
                <img src="public/icon-share.svg"  className="text-end" alt="err" />
            </a>
          </li>
          <li className="px-6 py-[0.3125rem] hover:bg-[#f8f9fa] transition-all">
            <a href="#" className="flex justify-between font-normal text-[0.9375rem]">
                Block
                <i class="fa-solid fa-ban text-[#7a7f9a]"></i>
            </a>
          </li>
          <li className="px-6 py-[0.3125rem] hover:bg-[#f8f9fa] transition-all">
            <a href="#" className="flex justify-between font-normal text-[0.9375rem]">
                Remove
                <i class="fa-solid fa-trash text-[#7a7f9a]"></i>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
export default OptionContact;
