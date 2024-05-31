/* 
    Component GroupContact render 1 danh sách liên hệ theo bảng chữ cái 
    @param1: letter: kí tự trong bảng chữ cái 
    @param2: danh sách trong contact dạng json gồm id và name 
        id dùng để cho nút hiện dropdown 
        name hiện tên trong danh sách
*/ 

import OptionContact from "./OptionContact";
function GroupContact({
  letter = "A",
  nameList = [{id: "1", name: "ALex Alison" }, { id: "2", name: "ALex Alison" }],
}) {
  //Duyet mảng
  const listName = nameList.map((element) => (
    <li
      key={element.id}
      className="block max-w-full lg:max-w-[23.75rem] px-5 py-2.5 text-sm font-semibold"
    >
      <div className="flex items-center">
        <div className="name flex-1 text-[#343A40]">{element.name}</div>
        <div className="menu relative">
          <OptionContact index = {element.id}></OptionContact>
        </div>
      </div>
    </li>
  ));
  return (
    <>
      {/* nếu là nhóm A : thì không có margin top */}
      <div className={letter === "A" ? "" : "mt-4"}>
        <h4 className="p-4 text-[0.9375rem] font-medium text-primary">
          {letter}
        </h4>
        <ul>{listName}</ul>
      </div>
    </>
  );
}
export default GroupContact;
