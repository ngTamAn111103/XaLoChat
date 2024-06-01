import SearchResult from "./SearchResult";
import {
  collection,
  query,
  where,
  getDocs,
  startAt,
  endAt,
  orderBy,
  doc,
} from "firebase/firestore";
import { db } from "../../lib/firebase";
import { useEffect, useState } from "react";

export function SearchFriend({ isActive, clickedChat, setClickedChat, users,setUsers, setFlag }) {
  //TN: Front-end: xu ly khi an vao 1 user dang tim 
  function handleClickUser (order,e) { 
    console.log(order)
    setClickedChat((order))
    setFlag("search")
    console.log(clickedChat)
  }
  useEffect(()=>{ 

  },[]) 
  // // TA: Backend
  // const [users, setUsers] = useState([]); => doi qua index.jsx
  // Click vào 1 li của kết quả search
  const handleClickItem = (e)=>{
    console.log(e.target);
  }
  // Xử lý thay đổi value input -> Search realtime
  const handleChangeValue = async (e) => {
    try {
      // lấy chuỗi người dùng nhập
      const q = e.target.value;

      // Reset users nếu q rỗng
      if (q.trim() === "") {
        setUsers([]);
        return;
      }
      // kết nối db
      const profileRef = collection(db, "Profile");
      // Lấy tất cả documents trong collection
      const querySnapshot = await getDocs(profileRef);
      const result = [];
      // Duyệt danh sách docs
      querySnapshot.forEach((doc) => {
        // mỗi doc là 1 user
        const user = doc.data();
        
        // Kiểm tra tên
        if (user.Fullname.includes(q)) {
          result.push(user);
        }
      });
      setUsers(result);
       

      // result.map((e) => {
      //   console.log(e.Fullname);
      //   console.log(e.Email);
      // });
    } catch (error) {
      // log lỗi
      console.error("SearchFriend.jsx LỖI TRUY VẤN: " + error);
    }
  };

  const result = users.map((e, i) => {
    return (
      <SearchResult
        avatar={e.Avatar}
        name={e.Fullname}
        email={e.Email}
        key={i}
        i={i}
        onClick={(e)=>handleClickUser(i,e)}

      ></SearchResult>
    );
  });
  return (
    <>
      {/* title */}
      <div className={isActive ? "block" : "hidden"}>
        <div className="px-6 pt-5">
          <h4 className="mb-6 text-[1.3125rem] font-semibold text-[#343a40]">
            Search
          </h4>

          {/* Search */}
          <div className="search mb-4 flex">
            <span className="justify-center whitespace-nowrap rounded-s border-[#f0eff5] bg-[#e6ebf5] py-3   pe-2 ps-4 text-center text-sm font-normal text-[#7a7f9a]">
              <i className="fa-solid fa-magnifying-glass"></i>
            </span>
            <input
              type="text"
              className="leading-2 flex-1 rounded-e border-[#f0eff5] bg-[#e6ebf5] py-3 pe-2 ps-4 text-sm font-normal text-[#7a7f9a] focus:outline-none"
              placeholder="Search messages or users"
              onChange={handleChangeValue}
            />
          </div>
        </div>
        <ul className="h-[calc(100vh_-_140px)]">{result ?? result}</ul>
      </div>
    </>
  );
}


