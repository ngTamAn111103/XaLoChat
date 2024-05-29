
export function NavbarItem({onClickButton, href = "#", icon, isPrimary = false, id }) {
  return (
    <li
      className={`mx-3 my-1 
      box-border
      list-item
      cursor-pointer	
    ${isPrimary ? "bg-bg-color " : ""}
        rounded-xl`}
        onClick={onClickButton}
    >
      <a
        href={href}
        id={id}
        className=" mx-auto my-0 mb-2 block h-[56px] w-[56px] rounded-lg border-0 bg-none p-0 text-center  text-2xl  font-medium leading-[56px] text-bs-sidebar-menu-item-color outline-none"
      >
        <i className={icon + `${isPrimary?" text-primary":" text-secondary-color"}` }></i>
      </a>
    </li>
  );
}
