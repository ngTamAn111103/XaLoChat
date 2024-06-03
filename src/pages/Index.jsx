import { NavbarItem } from "../components_Index/side-menu/NavbarItem";
import Logo from "/public/images/logo.e41f6087382055646c1c02d0a63583d5.svg";
import { useEffect, useRef, useState } from "react";
import { Setting } from "../components_Index/Settings";
import { ToastContainer, toast } from "react-toastify";
import notify from "../../public/audio/milestone_ios_17.mp3";
import notify_send from "../../public/audio/send_sms.mp3";
import FriendList from "../components_Index/chat-leftsidebar/FriendList";
import { NavbarLeft } from "../components_Index/NavbarLeft";
import Profile from "../components_Index/Profile";
import GroupList from "../components_Index/GroupList";
import ContactList from "../components_Index/Contacts/ContactList";
import { onAuthStateChanged } from "firebase/auth";
import { Navigate, Outlet } from "react-router-dom";
import ChatContainer from "../components_Index/ChatContainer";
import Modal from "../components_Index/side-menu/ModalCall";
import CallScreen from "../components_Index/side-menu/CallScreen";
import CallVideoScreen from "../components_Index/side-menu/CallVideoScreen";
import {
  fakeFriendList,
  fakeMessages,
  userProfile,
  profileDetails,
  profileSetting,
} from "./Test";
import Toast from "../general_component/Toast";
import { SearchFriend } from "../components_Index/search/SearchFriend";
import { useUserStore } from "../lib/userStore";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  onSnapshot,
  updateDoc,
  arrayUnion,
} from "firebase/firestore";
import { db } from "../lib/firebase";
import { useNavigate } from "react-router-dom";

import { set } from "firebase/database";

export function Index() {
  // Lấy người dùng hiện tại
  const { currentUser } = useUserStore();
  const [showUserInfo, setUserInfo] = useState(false); //ấn để hiện phần thông tin user ẩn
  const [selectedButton, setSelectedButton] = useState("message"); //ẩn để chọn 1 bên của navbar
  const [clickedChat, setClickedChat] = useState(-1); //ấn để chọn tin nhắn và update vị trí được ấn
  const [showChat, setShowChat] = useState(fakeMessages["1"]);
  // Lưu trữ danh sách các cuộc trò chuyện (mảng).

  const [showFriendList, setshowFriendList] = useState([]); // Trạng thái để lưu trữ danh sách các cuộc trò chuyện (mảng).
  const [showSearch, setShowSearch] = useState(false); // Trạng thái để kiểm soát việc hiển thị của hộp văn bản tìm kiếm.
  const searchRef = useRef(null); // useRef để tham chiếu đến phần tử đầu vào tìm kiếm.
  // useRef để tham chiếu đến phần tử đầu vào chat.

  const chatRef = useRef(null);
  // Trạng thái để quản lý cờ cho chế độ xem tìm kiếm hoặc chat.
  const [flagSearchOrChat, setFlag] = useState("message");
  // Trạng thái để lưu trữ ảnh đại diện của người dùng.
  const [avatar, setAvatar] = useState("");
  // Trạng thái để lưu trữ tên của người dùng.
  const [name, setName] = useState();

  const [resultSearch, setResultSearch] = useState([]);

  // Lưu trữ thông tin của người nhận (receiver) cho mỗi cuộc trò chuyện (object với key là ID phòng chat).
  const [receiverInfos, setReceiverInfos] = useState({});

  // Trạng thái để kiểm soát việc hiển thị của modal và các màn hình cuộc gọi.
  const [showModal, setShowModal] = useState(false);
  const [showCallScreen, setShowCallScreen] = useState(false);
  const [showVideoScreen, setShowVideoScreen] = useState(false);
  const [actionType, setActionType] = useState(""); // Loại hành động: audio hoặc video.

  // Hàm để chuyển đổi trạng thái hiển thị của modal.
  const toggleModal = () => setShowModal(!showModal);

  // Hàm để chuyển đổi trạng thái hiển thị của màn hình cuộc gọi.
  const toggleCallScreen = () => {
    setShowModal(false); // Đóng modal nếu mở.
    setShowCallScreen(!showCallScreen); // Chuyển đổi trạng thái màn hình cuộc gọi.
    setShowVideoScreen(false); // Đảm bảo rằng màn hình video đóng khi chuyển đổi.
  };

  // Hàm để chuyển đổi trạng thái hiển thị của màn hình video.
  const toggleVideoScreen = () => {
    setShowModal(false); // Đóng modal nếu mở.
    setShowVideoScreen(!showVideoScreen); // Chuyển đổi trạng thái màn hình video.
    if (!showVideoScreen) {
      setShowCallScreen(false); // Nếu đang mở màn hình video, đảm bảo rằng màn hình cuộc gọi đóng.
    }
  };

  // Hàm xử lý sự kiện khi biểu tượng được nhấp (gọi hoặc nhắn tin).
  const handleIconClick = (type) => {
    setActionType(type);
    toggleModal();
  }

  //TA: Viết cho search friend
  const createChatroom = async (receiverId) => {
    try {
      // Gọi hàm tạo phòng chat từ backend (hoặc logic xử lý tương tự)
      const now = new Date()
      const hours = now.getHours()
      const minutes = now.getMinutes()
      // 1. Tạo  chatroom mới
      const docRef = await addDoc(collection(db, "Chatroom"), {
        // Các trường dữ liệu của bạn
        Name: "Tên phòng chat",
        Members: [receiverId, currentUser.ID],
        isGroup: false,
        CreateBy: currentUser.ID,
        Description: "Description",
        CreatedAt: `${hours}:${minutes}`,

        Message: [],
      });
      const newChatroomId = docRef.id;
      // 2. Cập nhật mảng Chatroom trong document Profile của người dùng hiện tại
      const currentUserRef = doc(db, "Profile", currentUser.ID);
      await updateDoc(currentUserRef, {
        Chatroom: arrayUnion(newChatroomId),
      });
      // 3 Cập nhật mảng Chatroom trong document Profile của người dùng được click
      const receiverRef = doc(db, "Profile", receiverId);
      await updateDoc(receiverRef, {
        Chatroom: arrayUnion(newChatroomId),
      });

      // Cập nhật id vào chính chatroom
      const chatroomRef = doc(db, "Chatroom", docRef.id);
      await updateDoc(chatroomRef, {
        ID: newChatroomId,
      });
      console.log("Document written with ID: ", docRef.id);
      // Chuyển hướng đến trang đăng nhập
      // navigate("/index");
      setSelectedButton("message")
    } catch (error) {
      // Xử lý lỗi
      console.log("createChatroom thất bại " + error);
    }
  };



  // Hàm bắt đầu cuộc gọi.
  const startCall = () => {
    setShowModal(false); // Đóng modal.
    if (actionType === "video") {
      toggleVideoScreen(); // Mở màn hình video nếu hành động là video.
    } else {
      toggleCallScreen(); // Mở màn hình cuộc gọi âm thanh nếu không phải là video.
    }
  };

  // TA: Backend
  const [users, setUsers] = useState([]);

  // Lắng nghe sự kiện khi profile được thay đổi
  // ... (các import khác)

  // ... (các state khác)

  // Lắng nghe sự kiện khi profile được thay đổi
  useEffect(() => {

//     // Lấy danh sách ID phòng chat của người dùng hiện tại tham gia
//     const listChatroomID = currentUser?.Chatroom || [];
//     // Tạo một mảng chứa các unsubscribe functions để sau này dọn dẹp(ngừng lắng nghe) khi unmount 1 chatroom
//     const unsubscribeFunctions = [];

//     // Duyệt qua từng id chatroom
//     listChatroomID.forEach((chatroomId) => {
//       // lắng nghe sự thay đổi của phòng chat trong listChatroomID:
//       const unsubscribe = onSnapshot(doc(db, "Chatroom", chatroomId), (doc) => {
//         // Lấy thông tin chatroom dựa vào chatroomID
//         // Nếu phòng chat tồn tại: lấy dữ liệu phòng chat (chatroomData) và cập nhật vào state chats

    if (!currentUser) return; // Thoát nếu chưa có thông tin người dùng

    const listChatroomID = currentUser.Chatroom || [];

    // Lắng nghe sự thay đổi của từng phòng chat trong listChatroomID
    const unsubscribeFunctions = listChatroomID.map((chatroomId) => {
      return onSnapshot(doc(db, "Chatroom", chatroomId), (doc) => {

        if (doc.exists()) {
          const chatroomData = doc.data();

          try {
            if (
              chatroomData.Message[chatroomData.Message.length - 1].SenderID ==
              currentUser.ID
            ) {
              new Audio(notify_send).play();
            } else {
              new Audio(notify).play();
            }
          } catch (error) {}
          setshowFriendList((prevChats) => {
            const index = prevChats.findIndex((chat) => chat.id === chatroomId);
            if (index > -1) {
              // Nếu phòng chat đã tồn tại trong danh sách, cập nhật nó
              prevChats[index] = { id: chatroomId, ...chatroomData };
            } else {
              // Nếu phòng chat chưa tồn tại, thêm nó vào đầu danh sách
              prevChats.unshift({ id: chatroomId, ...chatroomData });
            }
            return [...prevChats];
          });
        }
      });
    });

    // Dọn dẹp khi component unmount hoặc currentUser thay đổi
    return () => unsubscribeFunctions.forEach((unsubscribe) => unsubscribe());
  }, [currentUser]); // Lắng nghe lại khi currentUser thay đổi (khi đăng nhập/đăng xuất)

  // useEffect(() => {
  //   if (!currentUser) return; // Thoát nếu chưa có thông tin người dùng

  //   // Lấy danh sách ID phòng chat của người dùng hiện tại tham gia
  //   const listChatroomID = currentUser.Chatroom || [];
  //   // Tạo một mảng chứa các unsubscribe functions để sau này dọn dẹp(ngừng lắng nghe) khi unmount 1 chatroom
  //   const unsubscribeFunctions = [];

  //   // Duyệt qua từng id chatroom
  //   listChatroomID.forEach((chatroomId) => {
  //     // lắng nghe sự thay đổi của phòng chat trong listChatroomID:
  //     const unsubscribe = onSnapshot(doc(db, "Chatroom", chatroomId), (doc) => {

  //       // Lấy thông tin chatroom dựa vào chatroomID
  //       // Nếu phòng chat tồn tại: lấy dữ liệu phòng chat (chatroomData) và cập nhật vào state chats
  //       if (doc.exists()) {
  //         const chatroomData = doc.data();
  //         if (clickedChat > -1) {
  //           if (chatroomData.Message[chatroomData.Message.length-1].SenderID == currentUser.ID) {

  //             (new Audio(notify_send)).play()
  //           }
  //           else{
  //             (new Audio(notify)).play()
  //           }
  //         }

  //         // Cập nhật trạng thái chats, bạn có thể thêm logic để xử lý tin nhắn mới nhất, trạng thái online, ...
  //         setshowFriendList((prevChats) => {
  //           const index = prevChats.findIndex((chat) => chat.id === chatroomId);
  //           if (index > -1) {
  //             // Nếu phòng chat đã tồn tại trong danh sách, cập nhật nó
  //             prevChats[index] = { id: chatroomId, ...chatroomData };
  //           } else {
  //             // Nếu phòng chat chưa tồn tại, thêm nó vào đầu danh sách
  //             prevChats.unshift({ id: chatroomId, ...chatroomData });
  //           }
  //           return [...prevChats];
  //         });
  //       }
  //     });
  //     unsubscribeFunctions.push(unsubscribe); // Thêm unsubscribe function vào mảng
  //   });

  //   // Dọn dẹp khi component unmount
  //   return () => {
  //     unsubscribeFunctions.forEach((unsubscribe) => unsubscribe());
  //   };
  // }, [currentUser]); // Lắng nghe lại khi currentUser thay đổi (khi đăng nhập/đăng xuất)

  useEffect(() => {
    const fetchReceiverInfos = async () => {
      const newReceiverInfos = {};
      // Lặp qua từng chat trong chats
      for (const chat of showFriendList) {
        // Kiểm tra ko phải nhóm chat
        if (!chat.isGroup) {
          // Lấy ID người còn lại
          const otherMembers = chat.Members.filter(
            (member) => member !== currentUser.ID,
          );
          const receiverId = otherMembers[0];
          // lấy profile người còn lại
          const docRef = doc(db, "Profile", receiverId);
          const docSnap = await getDoc(docRef);

          if (docSnap.exists()) {
            newReceiverInfos[chat.id] = docSnap.data();
          }
        }
      }
      setReceiverInfos(newReceiverInfos);
    };

    fetchReceiverInfos();
  }, [showFriendList, currentUser.ID]);

  // Dropdown state
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  // Thêm sựu kiện khi click ra ngoài của thanh tiềm kiếm
  useEffect(() => {
    function handleClickOutside(event) {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSearch(false);
      }
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
      if (showModal && !modalRef.current.contains(event.target)) {
        setShowModal(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [searchRef, dropdownRef, showModal]);

  //An de hien thi chat tuong ung
  useEffect(() => {
    // console.log("eff: " + clickedChat + flagSearchOrChat)

    if (flagSearchOrChat == "message") {
      //setshowChat sau khi an vao 1 nguoi
      // console.log(receiverInfos[`${}`])
      if (showFriendList[clickedChat]) {
        const key = showFriendList[clickedChat].id;
        setShowChat(fakeMessages[key]);
      } else {
        setShowChat("");
      }
      setAvatar(
        <img
          src={`${showFriendList[clickedChat] ? receiverInfos[showFriendList[clickedChat].ID].Avatar : "https://uploads.sitepoint.com/wp-content/uploads/2021/04/1618197067vitejs.png"}`}
          className="h-10 w-10 rounded-full"
        />,
      );
      setName(
        <>
          <a href="#" className="decoration-0 outline-none sm:hidden">
            {

              showFriendList[clickedChat]
                ? receiverInfos[showFriendList[clickedChat].ID].Fullname
                : "NULL"

              // showFriendList[clickedChat]?.name.length > 14
              //   ? showFriendList[clickedChat]?.name.substring(0, 17) + "..."
              //   : showFriendList[clickedChat]?.name.substring(0, 17)
            }
          </a>
          <a
            href="#"
            className="hidden decoration-0 outline-none sm:inline-block"
          >
            {showFriendList[clickedChat]
              ? receiverInfos[showFriendList[clickedChat].ID].Fullname
              : "NULL"}
          </a>
        </>,
      );
    } else if (flagSearchOrChat == "search") {
      setAvatar(
        <img
          src={`${showFriendList[clickedChat] ? receiverInfos[showFriendList[clickedChat].ID].Avatar : "https://uploads.sitepoint.com/wp-content/uploads/2021/04/1618197067vitejs.png"}`}
          className="h-10 w-10 rounded-full"
        />,
      );
      setName(
        <>
          <a href="#" className="decoration-0 outline-none sm:hidden">
            {
              showFriendList[clickedChat]
                ? receiverInfos[showFriendList[clickedChat].ID].Fullname
                : "NULL"
              // users[clickedChat]?.Fullname.length > 14
              //   ? users[clickedChat]?.Fullname.substring(0, 17) + "..."
              //   : users[clickedChat]?.Fullname.substring(0, 17)
            }
          </a>
          <a
            href="#"
            className="hidden decoration-0 outline-none sm:inline-block"
          >
            {showFriendList[clickedChat]
              ? receiverInfos[showFriendList[clickedChat].ID].Fullname
              : "NULL"}
          </a>
        </>,
      );
    }
    //responsive
    if (chatRef.current.classList.contains("left-full")) {
      chatRef.current.classList.remove("left-full");
      chatRef.current.classList.add("left-0");
    } else {
      chatRef.current.classList.add("left-full");
    }
  }, [clickedChat]);

  function handelBackButton() {
    if (chatRef.current.classList.contains("left-full")) {
      chatRef.current.classList.remove("left-full");
      chatRef.current.classList.add("left-0");
    } else {
      chatRef.current.classList.add("left-full");
    }
  }
  // đóng modal khi click ra ngoài
  const modalRef = useRef(null);
  // mặc định là hiện lên phần chat

  return (
    <>
    
      {/* Toàn bộ trang index */}
      <div className="layout-wrapper box-border flex bg-[#f5f7fb]">
        {/* Thanh navbar bên trái */}
        {/* <Toast status="success" content="lorem abc"></Toast> */}
        {/* <Toast status="alert" content="Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet"></Toast> */}

        <NavbarLeft
          selectedButton={selectedButton}
          setSelectedButton={setSelectedButton}
        />

        {/* Thanh ở giữa*/}
        <div className="me-lg-1 me-1 h-full w-full bg-[#f5f7fb] drop-shadow-lg lg:min-w-[380px] lg:max-w-[380px]	">
          <div className="contain ">
            <Profile
              isActive={selectedButton === "user"}
              userProfile={currentUser}
              isAttachFile={false}
              profileDetails={profileDetails}
            />

            <FriendList
              isActive={selectedButton == "message" ? true : false}
              clickedButton={clickedChat}
              setClickedButton={setClickedChat}
              friendlist={showFriendList}
              receiverInfos={receiverInfos} // cái này của TAO, đừng hỏi
              setFlag={setFlag}
            ></FriendList>
            <GroupList isActive={selectedButton == "group" ? true : false} />
            <ContactList
              isActive={selectedButton == "contacts" ? true : false}
            />
            <Setting
              isActive={selectedButton === "setting"}
              profileSetting={profileSetting}
              profileDetails={profileDetails}
            />
            <SearchFriend
              isActive={selectedButton == "plus" ? true : false}
              clickedChat={clickedChat}
              setClickedChat={setClickedChat}
              // friendlist={showFriendList}
              setUsers={setResultSearch}
              users={resultSearch}
              setFlag={setFlag}
              createChatroom={createChatroom} // Truyền hàm createChatroom vào SearchFriend
            />
          </div>
        </div>

        {/* Phần chat + thông tin cá nhân  */}

        <div
          ref={chatRef}
          className="user-chat fixed left-full right-0 z-10 h-screen flex-1 transition-all duration-300 lg:relative lg:left-0 lg:z-0 lg:block"
        >
          <div className="flex h-full flex-row">
            {/* phần chat */}
            <div className="userchat h-full flex-1 bg-text-danger">
              <div className="user-chat h-screen flex-1 overflow-hidden bg-white">
                <div className="flex h-full flex-row">
                  {/* phần chat */}
                  <div className="userchat relative w-full overflow-hidden">
                    {/* Header: Thông tin người dùng */}
                    <div className="border-b border-bs-border-color p-6">
                      <div className="flex flex-wrap items-center justify-between">
                        {/* Avt + Tên */}
                        <div className="col-8 col-sm-4">
                          {/* an de tro ve */}
                          <div className="flex items-center">
                            <div
                              className="block px-2 lg:hidden"
                              onClick={() => handelBackButton()}
                            >
                              <i className="fa-solid fa-angle-left"></i>
                            </div>
                            <div className="ml-0 mr-4">{avatar}</div>
                            <div className="flex-grow overflow-hidden">
                              <h5 className="mb-0 overflow-hidden text-ellipsis whitespace-nowrap text-base font-semibold text-bs-dark">
                                {name}
                                <i className="fa-solid fa-circle ml-2 text-[10px] text-bs-success-rgb"></i>
                              </h5>
                            </div>
                          </div>
                        </div>
                        {/* Tìm kiếm, call, video, info, three dots */}
                        <div className="col-4 col-sm-8 ">
                          <ul className="user-chat-nav chat-option mb-0 mt-0 list-none pl-0">
                            {/* ============== Tìm kiếm ================*/}
                            <li className="mr-7 inline-block">
                              <div className="relative" ref={searchRef}>
                                <button
                                  type="button"
                                  aria-haspopup="true"
                                  aria-expanded="false"
                                  className="btn bg-transparent border-none"
                                  onClick={() => setShowSearch(!showSearch)} // toggle tìm kiếm
                                >
                                  <i className="fa-solid fa-magnifying-glass"></i>
                                </button>
                                {showSearch && (
                                  <div
                                    tabIndex="-1"
                                    role="menu"
                                    aria-hidden="true"
                                    className="absolute right-0 mt-1 w-64 rounded-md border border-[#DCDCDC] bg-white p-0 shadow-lg"
                                    style={{
                                      transition: "opacity 0.3s, transform 1s ",
                                      opacity: 1,
                                      transform: "translateY(0)",
                                    }}
                                  >
                                    <div className="p-2">
                                      <input
                                        placeholder="Search.."
                                        type="text"
                                        className="form-control w-60 rounded-md bg-[#E6EBF5] p-2 focus:outline-none"
                                      />
                                    </div>
                                  </div>
                                )}
                              </div>
                            </li>
                            {/*======================= call ===============  */}
                            <li className="mr-7 hidden min-[450px]:inline-block">
                              <i
                                className="fa-solid fa-phone"
                                onClick={() => handleIconClick("audio")}
                              ></i>
                            </li>
                            {/*======================= video ===============  */}
                            <li className="mr-7 hidden min-[450px]:inline-block">
                              <i
                                className="fa-solid fa-video"
                                onClick={() => handleIconClick("video")}
                              ></i>
                            </li>
                            {/*======================= user ===============  */}
                            <li
                              className="mr-7 hidden sm:inline-block"
                              onClick={() => {
                                setUserInfo(true);
                              }}
                            >
                              <i className="fa-solid fa-user"></i>
                            </li>
                            {/*======================= three dots ===============  */}
                            <li className="mr-7 inline-block">
                              <div className="relative" ref={dropdownRef}>
                                <button
                                  className="font-size-18 text-muted"
                                  id="dropdownMenuButton"
                                  onClick={() => setShowDropdown(!showDropdown)}
                                >
                                  <i className="fa-solid fa-ellipsis-vertical"></i>
                                </button>
                                {showDropdown && (
                                  <div className="absolute right-0 mt-2 w-40 rounded-md bg-white text-[#495057] shadow-lg">
                                    <div className="py-1">
                                      <button
                                        className="block w-full px-4 py-2 text-left text-sm hover:bg-[#F5F5F5] lg:hidden"
                                        onClick={() => {
                                          setUserInfo(true);
                                        }}
                                      >
                                        View profile
                                        <i className="fa-solid fa-user float-end p-1"></i>
                                      </button>
                                      <button
                                        className="block w-full px-4 py-2 text-left text-sm hover:bg-[#F5F5F5]"
                                        onClick={() => {}}
                                      >
                                        Archive
                                        <i className="fa-solid fa-box-archive float-end p-1"></i>
                                      </button>
                                      <button
                                        className="block w-full px-4 py-2 text-left text-sm hover:bg-[#F5F5F5]"
                                        onClick={() => {}}
                                      >
                                        Muted
                                        <i className="fa-solid fa-volume-xmark float-end p-1"></i>
                                      </button>
                                      <button
                                        className="block w-full px-4 py-2 text-left text-sm hover:bg-[#F5F5F5]"
                                        onClick={() => {}}
                                      >
                                        Delete
                                        <i className="fa-solid fa-trash float-end p-1"></i>
                                      </button>
                                    </div>
                                  </div>
                                )}
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    {/* Chat container */}
                    <ChatContainer
                      messages={
                        showFriendList[clickedChat]
                          ? showFriendList[clickedChat].Message
                          : showChat
                      }
                      setMessages={setShowChat}
                      receiverAvatar={avatar.props?.src}
                      receiverName={name}
                      chatroomId={
                        showFriendList[clickedChat]
                          ? showFriendList[clickedChat].ID
                          : ""
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* phần thông tin user được ẩn đi */}
            <div
              className={`user-profile-sidebar fixed left-0 right-0 z-[11] ms-1 h-full basis-[23.5rem] overflow-auto bg-white transition-all lg:static ${showUserInfo ? "block" : "hidden"}`}
            >
              <Profile
                isHeader={false}
                isActive={true}
                extend={
                  <div
                    className="button-cancel px-6 pb-2 pt-6 text-right text-xs text-[#7a7f9a]"
                    onClick={() => {
                      setUserInfo(!showUserInfo);
                    }}
                  >
                    <i className="fa-solid fa-x font-extrabold"></i>
                  </div>
                }
                userProfile={{
                  Fullname:
                    (showFriendList[clickedChat] &&
                      receiverInfos[showFriendList[clickedChat].ID] &&
                      receiverInfos[showFriendList[clickedChat].ID].Fullname) ||
                    "NULL",
                  Avatar:
                    (showFriendList[clickedChat] &&
                      receiverInfos[showFriendList[clickedChat].ID] &&
                      receiverInfos[showFriendList[clickedChat].ID].Avatar) ||
                    "https://uploads.sitepoint.com/wp-content/uploads/2021/04/1618197067vitejs.png",
                  Description:
                    (showFriendList[clickedChat] &&
                      receiverInfos[showFriendList[clickedChat].ID] &&
                      receiverInfos[showFriendList[clickedChat].ID]
                        .Description) ||
                    "Mô tả ở đây",
                }}
                profileDetails={profileDetails}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Modal Call */}
      {showModal && (
        <Modal
          showModal={showModal}
          toggleModal={toggleModal}
          toggleCallScreen={startCall}
          receiverAvatar={avatar.props.src}
           receiverName={name}
          actionType={actionType}
        />
      )}

      {showCallScreen && <CallScreen toggleCallScreen={toggleCallScreen} receiverAvatar={avatar.props.src} receiverName={name} />}

      {showVideoScreen && (
        <CallVideoScreen
          showModal={showVideoScreen}
          receiverAvatar={avatar.props.src} 
          receiverName={name}
          toggleModal={toggleModal}
          toggleCallScreen={toggleCallScreen}
          modalRef={modalRef}
        />
      )}
    </>
  );
}

export default Index;
