
export function NavbarItem({onClickButton, href = "#", icon, isPrimary = false, id, customClass }) {
  return (
    <li
      className={`mx-3 my-1 
      box-border
      list-item
      cursor-pointer	
      ${customClass}
    ${isPrimary ? "bg-bg-color " : ""}
        rounded-xl`}
        onClick={onClickButton}
    >
      <a
        href={href}
        id={id}
        className=" mx-auto my-0 mb-2 block h-10 w-10 rounded-lg border-0 bg-none p-0 text-center  text-lg  font-medium leading-10 text-bs-sidebar-menu-item-color outline-none"
      >
        <i className={icon + `${isPrimary?" text-primary":" text-secondary-color"}` }></i>
      </a>
    </li>
  );
}
