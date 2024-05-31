import { Header } from "../chat-leftsidebar/Header";
import GroupContact from "./GroupContact";
function ContactList({isActive}) {
  const nameList = [
    {
      A: [
        { id: "1", name: "Albert Rodarte" },
        { id: "2", name: "Allison Etter" },
      ],
    },
    {
      C: [{ id: "3", name: "Craig Smilley" }],
    },
    {
      D: [
        { id: "4", name: "Daniel Clay" },
        { id: "5", name: "Doris Brown" },
      ],
    },
    {
      I: [{ id: "6", name: "Iris Wells" }],
    },
  ];
  {
    /* duyet mang */
  }

  return (
    <>
      <div className={isActive ? "block": "hidden"}>
      <div className="overflow-auto">
        {/* Hiển thị Title và Input Search */}
        <Header
          title="Contacts"
          isSearch={true}
          placeholderSearch="Search users..."
          extend={
            <>
              <div className="user-chat-nav float-end">
                <div id="create-contact">
                  <button
                    data-modal-target="default-modal"
                    data-modal-toggle="default-modal"
                    className="focus:ring-blue-300 px-5 py-2.5 text-center text-sm font-medium text-[#7a7f9a] focus:outline-none"
                    type="button"
                  >
                    <i className="fa-regular fa-user"></i>
                  </button>
                </div>
              </div>
            </>
          }
        ></Header>

        {/* Hiển thị danh sách liên hệ theo nhóm A-Z */}
        <div className="scrollbar-config mt-5  h-[calc(100vh_-_140px)] overflow-auto scroll-smooth py-6 ps-6 pe-0 lg:p-6 focus:scroll-auto">
          {nameList.map((element) => (
            <GroupContact
            key={element.id}
              letter={Object.keys(element)[0]}
              nameList={element[Object.keys(element)[0]]}
            />
          ))}
        </div>
      </div>
      </div>
    </>
  );
}

export default ContactList;
