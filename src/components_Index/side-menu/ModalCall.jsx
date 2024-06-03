// Modal.js
import React from "react";

const Modal = ({ showModal, toggleModal, toggleCallScreen, currentUser, actionType }) => {
  return (
    <>
      {showModal && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 999,
          }}
        >
          <div
            className="h-[350px] w-[500px]"
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              backgroundColor: "#fff",
              padding: "20px",
              borderRadius: "8px",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            }}
          >
            <div style={{ textAlign: "center" }}>
              <div className="mb-4 mt-5 inline-block">
                <img
                  src={currentUser.Avatar}
                  className="h-20 w-20 rounded-full"
                  alt={currentUser.Fullname}
                />
              </div>
              <h5 className="text-truncate text-2xl">{currentUser.Fullname}</h5>
              {actionType === "audio" && <p className="text-[#7A7F9A]">Start Audio Call</p>}
              {actionType === "video" && <p className="text-[#7A7F9A]">Start Video Call</p>}
            </div>
            <div
              className="mt-5 "
              style={{ display: "flex", justifyContent: "center" }}
            >
              <button
                type="button"
                className=" bg-[#F44336] text-[#fff] hover:text-[#C62828] rounded-full p-4 m-4"
                onClick={toggleModal}
              >
                <i className="fa-solid fa-xmark fa-2xl"></i>
              </button>
              <button
                type="button"
                className="bg-[#4CAF50] hover:bg-[#43A047] text-[#fff] rounded-full p-4 m-4 "
                onClick={toggleCallScreen}
              >
                <i className={actionType === "video" ? "fa-solid fa-video fa-xl" : "fa-solid fa-phone fa-xl"}></i>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
