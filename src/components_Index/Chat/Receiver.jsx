import { useState } from "react";

/*
Receiver:  là bạn bè 
*/
export function Receiver({
  avatarReceiver,
  nameReceiver,
  createAtReceiver,
  msg,
  isLast,
  isFirst
}) {

    const [showTime,setShowTime] = useState(false)

    function handShowTime () { 
        setShowTime(!showTime)
    }




  return (
    <>
      <div className="mb-3 flex items-center">
        {isFirst == true ? (
          <>
            <img
              class="mr-2 h-8 w-8 rounded-full"
              src={avatarReceiver}
              alt="User Avatar"
            />
            <div className="font-medium" >{nameReceiver}</div>
          </>
        ) : (
          ""
        )}
      </div>
      <div className="ps-9">
        <div className="w-fit msg max-w-sm rounded-lg bg-primary p-2 text-white shadow" onClick={handShowTime} >
          {msg}
        </div>
        {isLast == true || showTime == true? (
          <div className="createdAt ms-1">
            {createAtReceiver ?? createAtReceiver}
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
}
