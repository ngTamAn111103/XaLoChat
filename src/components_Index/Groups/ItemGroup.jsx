export function ItemGroup({
  // isBadgeSoftDanger = false,
  numberBadgeSoftDanger = 0,
  groupName,

  avatarTitle,
  avatarGroup = "",
}) {
  return (
    <li>
      <a href="/dashboard" className="block pb-8">
        <div className="flex items-center">
          <div className="chat-user-img ml-0 mr-4">
            <div className="avatar-xs h-[2.2rem] w-[2.2rem]">
              <span className="avatar-title bg-bs-primary-bg-subtle flex h-10 w-10 items-center justify-center rounded-full text-primary ">
                {/* {avatarGroup != "" &&(<img src={avatarGroup} alt="avt_group"  className="rounded-full"/>) || {avatarTitle} } */}
                {
                  // Nếu có ảnh group
                  avatarGroup != "" ? (
                    // Thì hiển thị ảnh ra
                    <img
                      src={avatarGroup}
                      alt="avt_group"
                      className="rounded-full  h-10 w-10"
                    />
                  ) : (
                    // Còn không thì hiển thị avatarTitle
                    avatarTitle
                  )
                }
              </span>
            </div>
          </div>
          <div className="flex grow items-center justify-between overflow-hidden">
            <h5 className="mb-0 overflow-hidden text-ellipsis whitespace-nowrap text-sm font-medium">
              {groupName}
            </h5>
            {/* Nếu có số lượng thông báo, thì hiển thị ra Badge Soft Danger*/}
            {numberBadgeSoftDanger != 0 && (
              <>
                <span className="float-end inline-block whitespace-nowrap rounded-full	 bg-[#ef476f2e] px-2 py-1 text-center leading-4  text-[#ef476f]">
                  {numberBadgeSoftDanger}
                </span>
              </>
            )}
          </div>
        </div>
      </a>
    </li>
  );
}
