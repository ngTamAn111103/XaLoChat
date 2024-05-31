function SearchResult({
  i, 
  avatar = "422673745_1431738810981438_8560367173620224784_n.jpg",
  name,
  email,
}) {
  return (
    <>
      <li className="px-2" key={i}>
        <a
          href="#"
          className={`mb-[0.125rem] block rounded px-5 py-4 transition hover:bg-[#e6ebf5]`}
        >
          <div className="flex items-center">
            {/* Avatar  */}
            <div className="avatar relative ">
              <img
                src={`images/` + avatar}
                alt="err"
                className="h-9  w-9 rounded-full"
              />
               
            </div>
            {/* Name,email*/}
            <div className="ms-4 flex-1">
              <div className="text-[.9375rem] font-semibold">{name}</div>
              <div className="text-xs font-light">{email}</div>
            </div>
         
          </div>
        </a>
      </li>
    </>
  );
}
export default SearchResult;
