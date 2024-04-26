function GroupContact ({
    letter = "A",
    nameList = [{"name": "ALex Alison"},{"name": "ALex Alison"}]
}) { 
    //Duyet mảng 
    const listName = nameList.map((element, index)=> 
    <li key={index} className="text-sm block min-w-[23.75rem] font-semibold px-5 py-2.5">
        <div className="flex items-center">
            <div className="name flex-1">
            {element.name}

            </div>
            <div className="dropdown">
                ...
            </div>
        </div>
    </li>)
    return (
        <>
        {/* nếu là nhóm A : thì không có margin top */}
        <div 
               className = {(letter==="A")? "" : "mt-4"}      
        >
            <h4 className="p-4 text-[0.9375rem] text-primary font-bold">{letter}</h4>
            <ul>
                {listName}
            </ul>
            


        </div>
        </>
    )
}
export default GroupContact 