import React, { useState } from "react";

function CallModal({ avatarSrc, name }) {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      {/* Button to toggle modal */}
      <button className="btn btn-primary" onClick={toggleModal}>
         .
      </button>

      {/* Modal */}
      {showModal && (
        <div style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", backgroundColor: "rgba(0, 0, 0, 0.5)", zIndex: 999 }}>
          <div  className="w-[500px] h-[350px]" style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", backgroundColor: "#fff", padding: "20px", borderRadius: "8px", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)" }}>
            <div style={{ textAlign: "center" }}>
              <div className="inline-block mb-4 mt-5">
                <img
                  src={avatarSrc}
                  className="h-20 w-20 rounded-full"
                  alt={name}
                />
              </div>
              <h5 className="text-truncate text-2xl">{name}</h5>
              <p className="text-[#7A7F9A]">Start Audio Call</p>
            </div>
            <div className="mt-5" style={{ display: "flex", justifyContent: "center" }}>
              <button
                type="button"
                className="btn btn-danger avatar-sm rounded-circle me-2 pt-5 p-4"
                onClick={toggleModal}
              >
                <i className="fa-solid fa-circle-xmark fa-2x"></i>
              </button>
              <button
                type="button"
                className="btn btn-success avatar-sm rounded-circle me-2 pt-5 p-4"
              >
                <i className="fa-solid fa-square-phone fa-2x"></i>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default CallModal;
