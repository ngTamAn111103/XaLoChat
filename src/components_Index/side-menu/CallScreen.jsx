import React, { useState, useEffect } from "react";
import { useUserStore } from "../../lib/userStore";
import { styled, keyframes } from "styled-components";

// animation
const pulse = keyframes`
  0% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    transform: scale(2);
    opacity: 0;
  }
`;

// Tạo styled components
const PulseAnimation = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
`;

const PulseCircle = styled.div`
  position: absolute;
  top: 0; /* Center vertically */
  left: 0; /* Center horizontally */
  width: 100px;
  height: 100px;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  animation: ${pulse} 2s infinite ease-in-out;

  &:nth-child(1) {
    animation-delay: 0s;
  }

  &:nth-child(2) {
    animation-delay: 0.5s;
  }

  &:nth-child(3) {
    animation-delay: 1s;
  }
`;

export function CallScreen({ toggleCallScreen }) {
  const { currentUser } = useUserStore();
  const [isVolumeLow, setIsVolumeLow] = useState(true);
  const [isSpeakerOn, setIsSpeakerOn] = useState(false); // Trạng thái loa
  const [audio] = useState(new Audio("/audio/nhac_cho.mp3")); // Sử dụng URL tương đối từ thư mục public
  const [endCallAudio] = useState(new Audio("/audio/end_call.mp3")); // Âm thanh khi kết thúc cuộc gọi

  useEffect(() => {
    // Phát âm thanh khi màn hình cuộc gọi hiển thị
    audio
      .play()
      .catch((error) => console.error("Failed to play audio:", error));
    audio.loop = true;

    // Dừng âm thanh khi component unmount hoặc khi toggleCallScreen được gọi
    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, [audio]);

  useEffect(() => {
    // Đặt âm lượng dựa trên trạng thái của loa và isVolumeLow
    audio.volume = isSpeakerOn ? (isVolumeLow ? 0.2 : 1) : 0.2;
  }, [isSpeakerOn, isVolumeLow]);

  const toggleVolume = () => {
    setIsVolumeLow(!isVolumeLow);
  };

  const toggleSpeaker = () => {
    setIsSpeakerOn(!isSpeakerOn);
  };

  // Hàm xử lý khi kết thúc cuộc gọi
  const handleEndCall = () => {
    toggleCallScreen(); // Ẩn màn hình cuộc gọi
    endCallAudio.play(); // Phát âm thanh kết thúc cuộc gọi
  };

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.9)",
        zIndex: 1000,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <PulseAnimation className="mb-4 mt-5 inline-block">
          <PulseCircle />
          <PulseCircle />
          <PulseCircle />
          <img
            src={currentUser.Avatar}
            className="h-20 w-20 rounded-full"
            alt={currentUser.Avatar}
            style={{
              position: "relative",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: 2,
            }}
          />
        </PulseAnimation>
        <h5 className="text-truncate text-2xl">{currentUser.Fullname}</h5>
        <p className="text-[#7A7F9A]">Calling...</p>
        {isSpeakerOn && (
          <p className="text-[#7A7F9A]">Bạn đang bật loa ngoài</p>
        )}
      </div>
      <div
        className="mt-5"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <button
          type="button"
          className="m-4 rounded-full bg-[#F44336] p-4 text-[#fff] hover:text-[#C62828]"
          onClick={toggleCallScreen && handleEndCall}
        >
          <i className="fa-solid fa-xmark fa-2xl"></i>
        </button>
        <button
          type="button"
          className="btn btn-success avatar-sm rounded-circle me-2 p-4 pt-5"
          onClick={toggleSpeaker}
        >
          <div onClick={toggleVolume} style={{ justifyContent: "center" }}>
            {isVolumeLow ? (
              <i className="fa-solid fa-volume-low fa-2xl fixed"></i>
            ) : (
              <i className="fa-solid fa-volume-high fa-2xl fixed"></i>
            )}
          </div>
        </button>
      </div>
    </div>
  );
}

export default CallScreen;
