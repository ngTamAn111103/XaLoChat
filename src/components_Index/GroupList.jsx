import React from "react";
import { Header } from "./chat-leftsidebar/Header";
import { ItemGroup } from "./Groups/ItemGroup";

export default function GroupList({isActive}) {
  return (
    // Title
    <>
      <div className={isActive ? "block" : "hidden"}>
      <Header
        title={"Groups"}
        placeholderSearch="Search groups..."
        isSearch={true}
        // Phần mở rộng bên tay phải chung hàng với heading
        extend={
          <>
            <div className="user-chat-nav float-end">
              <div id="create-group">
                <button
                  type="button"
                  className="cursor-pointer px-4 py-0 text-lg font-normal text-text-muted"
                >
                  <i className="fa-solid fa-user-group"></i>
                </button>
              </div>
            </div>
          </>
        }
      />

      {/* Danh sách groups */}
      <div className="chat-message-list chat-group-list h-[calc(100vh_-_160px)] max-h-full overflow-auto scroll-smooth p-6 pb-0 focus:scroll-auto">
        <div className="simplebar-wrapper">
          <ul role="list" className="chat-list m-0 list-none pl-0">
            <ItemGroup
              avatarGroup="public/images/320186702_823742058729606_3659513607149413256_n.jpg"
              avatarTitle="Đ"
              groupName={"Đi bơi"}
              numberBadgeSoftDanger={"99"}
            />
            <ItemGroup
              avatarGroup="public/images/422673745_1431738810981438_8560367173620224784_n.jpg"
              avatarTitle="Đ"
              groupName={"Đi bơi"}
              numberBadgeSoftDanger={"99"}
            />
            <ItemGroup
              avatarGroup="public/images/428618563_757557076329500_7155410430265501585_n.jpg"
              avatarTitle="Đ"
              groupName={"Đi bơi"}
              numberBadgeSoftDanger={"99"}
            />
            <ItemGroup
              avatarGroup="public/images/avatar-tinder.jpg"
              avatarTitle="Đ"
              groupName={"Đi bơi"}
              numberBadgeSoftDanger={"99"}
            />
            <ItemGroup
              avatarTitle="Đ"
              groupName={"Đi tắm"}
              
            />
            <ItemGroup
              avatarTitle="T"
              groupName={"Trộm chó"}
              
            />
            <ItemGroup
              avatarTitle="M"
              groupName={"Massage"}
              avatarGroup="images/320186702_823742058729606_3659513607149413256_n.jpg"
              
            />
            <ItemGroup
              avatarGroup="public/images/320186702_823742058729606_3659513607149413256_n.jpg"
              avatarTitle="Đ"
              groupName={"Đi bơi"}
              numberBadgeSoftDanger={"99"}
            />
            <ItemGroup
              avatarGroup="public/images/422673745_1431738810981438_8560367173620224784_n.jpg"
              avatarTitle="Đ"
              groupName={"Đi bơi"}
              numberBadgeSoftDanger={"99"}
            />
            <ItemGroup
              avatarGroup="public/images/428618563_757557076329500_7155410430265501585_n.jpg"
              avatarTitle="Đ"
              groupName={"Đi bơi"}
              numberBadgeSoftDanger={"99"}
            />
            <ItemGroup
              avatarGroup="public/images/avatar-tinder.jpg"
              avatarTitle="Đ"
              groupName={"Đi bơi"}
              numberBadgeSoftDanger={"99"}
            />
            <ItemGroup
              avatarTitle="Đ"
              groupName={"Đi tắm"}
              
            />
            <ItemGroup
              avatarTitle="T"
              groupName={"Trộm chó"}
              
            />
            <ItemGroup
              avatarTitle="M"
              groupName={"Massage"}
              
            />
            <ItemGroup
              avatarGroup="public/images/320186702_823742058729606_3659513607149413256_n.jpg"
              avatarTitle="Đ"
              groupName={"Đi bơi"}
              numberBadgeSoftDanger={"99"}
            />
            <ItemGroup
              avatarGroup="public/images/422673745_1431738810981438_8560367173620224784_n.jpg"
              avatarTitle="Đ"
              groupName={"Đi bơi"}
              numberBadgeSoftDanger={"99"}
            />
            <ItemGroup
              avatarGroup="public/images/428618563_757557076329500_7155410430265501585_n.jpg"
              avatarTitle="Đ"
              groupName={"Đi bơi"}
              numberBadgeSoftDanger={"99"}
            />
            <ItemGroup
              avatarGroup="public/images/avatar-tinder.jpg"
              avatarTitle="Đ"
              groupName={"Đi bơi"}
              numberBadgeSoftDanger={"99"}
            />
            <ItemGroup
              avatarTitle="Đ"
              groupName={"Đi tắm"}
              
            />
            <ItemGroup
              avatarTitle="T"
              groupName={"Trộm chó"}
              
            />
            <ItemGroup
              avatarTitle="M"
              groupName={"Massage"}
              
            />
          </ul>
        </div>
      </div>
      </div>
    </>
  );
}
