import { useState } from "react";

/*
Sender:  là mình
*/
export function Sender({ msg, createdAt,isLast }) {

    const [showTime,setShowTime] = useState(false)

    function handShowTime () { 
        setShowTime(!showTime)
    }

  return (
    <>
      <div class="mb-2 flex items-center justify-end">
        <div className="block">
          <div className=" max-w-sm msg rounded-lg bg-primary p-2 text-white shadow" onClick={handShowTime}>
            {msg}
          </div>
          {isLast == true || showTime == true?  <div className="createdAt text-end">{createdAt ?? createdAt}</div> : ""}
         
        </div>
      </div>
    </>
  );
}