function OnlineFriend({avatar = "avatar-captain.jpg", name = "Patrick", onClick}) { 
    return(
        <>
           <li className="w-[4.5rem] me-5">
                <div className="item">
                    <a href="" className="p-2 mt-4 bg-[#e6ebf5] block relative rounded-lg text-center">
                        <div className="avatar absolute top-0 translate-y-[-50%] left-[50%] translate-x-[-50%] right-0 w-9 h-9">
                            <img src={`images/`+avatar} alt="err" className="rounded-full"/>
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