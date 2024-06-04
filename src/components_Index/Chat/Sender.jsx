import { useState } from "react";

/*
Sender:  là mình
*/
export function Sender({ msg, createdAt,isLast, index }) {

    const [showTime,setShowTime] = useState(false)

    function handShowTime () { 
        setShowTime(!showTime)
    }

  return (
    <>
      <div className="mb-2 flex items-center justify-end mt-2" key = {index}>
        <div className="block w-1/2 lg:w-fit">
          <div className=" max-w-sm msg rounded-lg bg-primary p-2 text-white shadow" onClick={handShowTime}>
            {msg}
          </div>
          {isLast == true || showTime == true?  <div className="createdAt text-end">{createdAt ?? createdAt}</div> : ""}
         
        </div>
      </div>
    </>
  );
}
