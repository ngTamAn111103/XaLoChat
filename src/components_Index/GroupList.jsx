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
              avatarGroup="https://scontent.fsgn5-14.fna.fbcdn.net/v/t39.30808-6/422870990_10226853326462298_7240680387121576145_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=4t0mCugvRVMQ7kNvgFJYYAU&_nc_ht=scontent.fsgn5-14.fna&oh=00_AYCNsVUdsRQcCZSlVTkTOgAMS101dksDwr279tnRvYld1Q&oe=666464B3"
              avatarTitle="A"
              groupName={"Anti Thầy Hoàng"}
              numberBadgeSoftDanger={"99+"}
            />
         
            <ItemGroup
              avatarGroup="https://scontent.fsgn5-5.fna.fbcdn.net/v/t39.30808-6/301962485_751587722861858_878365837081963762_n.png?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=TGlED7jmNL0Q7kNvgFzyyOm&_nc_ht=scontent.fsgn5-5.fna&oh=00_AYC1NQRReI8Ga2ppicTZS45bwZ45toM3kmM255iyBXh9pg&oe=66646CB6"
              avatarTitle="K"
              groupName={"Khoa Công nghệ thông tin - CĐ Công nghệ Thủ Đức"}

              numberBadgeSoftDanger={"10"}
            />
            <ItemGroup
              avatarGroup="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
              avatarTitle=""
              groupName={"React"}

              numberBadgeSoftDanger={"3"}
            />
            <ItemGroup
              avatarGroup="https://uploads.sitepoint.com/wp-content/uploads/2021/04/1618197067vitejs.png"
              avatarTitle="V"
              groupName={"Vite"}

              numberBadgeSoftDanger={"12"}
            />
            <ItemGroup
              avatarGroup="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNhoXisDruJMDAq3Ltd-wuaMW2lGxck9wAKw&s"
              avatarTitle="T"
              groupName={"Tailwind"}

              numberBadgeSoftDanger={"63"}
            />
            <ItemGroup
              avatarTitle="B"
              groupName={"Bootstrap"}
              numberBadgeSoftDanger={"77"}
            />
            <ItemGroup
              avatarGroup="https://scontent.fsgn5-14.fna.fbcdn.net/v/t39.30808-6/422870990_10226853326462298_7240680387121576145_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=4t0mCugvRVMQ7kNvgFJYYAU&_nc_ht=scontent.fsgn5-14.fna&oh=00_AYCNsVUdsRQcCZSlVTkTOgAMS101dksDwr279tnRvYld1Q&oe=666464B3"
              avatarTitle="A"
              groupName={"Anti Thầy Hoàng"}
              numberBadgeSoftDanger={"99+"}
            />
         
            <ItemGroup
              avatarGroup="https://scontent.fsgn5-5.fna.fbcdn.net/v/t39.30808-6/301962485_751587722861858_878365837081963762_n.png?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=TGlED7jmNL0Q7kNvgFzyyOm&_nc_ht=scontent.fsgn5-5.fna&oh=00_AYC1NQRReI8Ga2ppicTZS45bwZ45toM3kmM255iyBXh9pg&oe=66646CB6"
              avatarTitle="K"
              groupName={"Khoa Công nghệ thông tin - CĐ Công nghệ Thủ Đức"}

              numberBadgeSoftDanger={"10"}
            />
            <ItemGroup
              avatarGroup="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
              avatarTitle=""
              groupName={"React"}

              numberBadgeSoftDanger={"3"}
            />
            <ItemGroup
              avatarGroup="https://uploads.sitepoint.com/wp-content/uploads/2021/04/1618197067vitejs.png"
              avatarTitle="V"
              groupName={"Vite"}

              numberBadgeSoftDanger={"12"}
            />
            <ItemGroup
              avatarGroup="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNhoXisDruJMDAq3Ltd-wuaMW2lGxck9wAKw&s"
              avatarTitle="T"
              groupName={"Tailwind"}

              numberBadgeSoftDanger={"63"}
            />
            <ItemGroup
              avatarTitle="B"
              groupName={"Bootstrap"}
              numberBadgeSoftDanger={"77"}
            />
            <ItemGroup
              avatarGroup="https://scontent.fsgn5-14.fna.fbcdn.net/v/t39.30808-6/422870990_10226853326462298_7240680387121576145_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=4t0mCugvRVMQ7kNvgFJYYAU&_nc_ht=scontent.fsgn5-14.fna&oh=00_AYCNsVUdsRQcCZSlVTkTOgAMS101dksDwr279tnRvYld1Q&oe=666464B3"
              avatarTitle="A"
              groupName={"Anti Thầy Hoàng"}
              numberBadgeSoftDanger={"99+"}
            />
         
            <ItemGroup
              avatarGroup="https://scontent.fsgn5-5.fna.fbcdn.net/v/t39.30808-6/301962485_751587722861858_878365837081963762_n.png?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=TGlED7jmNL0Q7kNvgFzyyOm&_nc_ht=scontent.fsgn5-5.fna&oh=00_AYC1NQRReI8Ga2ppicTZS45bwZ45toM3kmM255iyBXh9pg&oe=66646CB6"
              avatarTitle="K"
              groupName={"Khoa Công nghệ thông tin - CĐ Công nghệ Thủ Đức"}

              numberBadgeSoftDanger={"10"}
            />
            <ItemGroup
              avatarGroup="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
              avatarTitle=""
              groupName={"React"}

              numberBadgeSoftDanger={"3"}
            />
            <ItemGroup
              avatarGroup="https://uploads.sitepoint.com/wp-content/uploads/2021/04/1618197067vitejs.png"
              avatarTitle="V"
              groupName={"Vite"}

              numberBadgeSoftDanger={"12"}
            />
            <ItemGroup
              avatarGroup="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNhoXisDruJMDAq3Ltd-wuaMW2lGxck9wAKw&s"
              avatarTitle="T"
              groupName={"Tailwind"}

              numberBadgeSoftDanger={"63"}
            />
            <ItemGroup
              avatarTitle="B"
              groupName={"Bootstrap"}
              numberBadgeSoftDanger={"77"}
            />
            
         
            
            
          </ul>
        </div>
      </div>
      </div>
    </>
  );
}
