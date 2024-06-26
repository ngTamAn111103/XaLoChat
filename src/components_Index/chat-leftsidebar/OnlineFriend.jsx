function OnlineFriend({avatar = "avatar-captain.jpg", name = "Luffy"}) { 
    return(
        <>
           <li className="w-[5rem] mx-2">
                <div className="item">
                    <a href="" className="p-2 mt-4 bg-[#e6ebf5] block relative rounded-lg text-center">
                        <div className="avatar absolute top-0 translate-y-[-50%] left-[50%] translate-x-[-50%] right-0 w-9 h-9">
                            <img src={avatar} alt={avatar} className="rounded-full w-9 h-9"/>
                            <span className="block bg-[#06d6a0] border-2 border-[#fff] rounded-full w-2.5 h-2.5 absolute right-0 translate-y-[-50%]"></span>
                        </div>
                        <h6 className="text-xs mb-1 mt-4 font-medium">    
                            {name}
                        </h6>
                    </a>
                </div>

           </li>
        
        </>
    )

}

export default OnlineFriend