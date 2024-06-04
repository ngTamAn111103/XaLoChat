import React, { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";

const CallVideoScreen = ({
  showModal,
  setShowModal,
  receiverAvatar = "",
  receiverName = "",
  toggleModal,
  toggleCallScreen,
  toggleVideoScreen,
}) => {
  const videoRef = useRef(null);
  const streamRef = useRef(null);
  const [audio] = useState(new Audio("/audio/nhac_cho.mp3")); // Sử dụng Audio để phát âm thanh chuông
  const [isMuted, setIsMuted] = useState(false); // State để kiểm soát trạng thái của âm thanh

  const stopCamera = () => {
    try {
      if (streamRef.current) {
        const tracks = streamRef.current.getTracks();
        tracks.forEach((track) => {
          track.stop(); // Dừng track của stream
        });
        videoRef.current.srcObject = null; // Reset video element source
        streamRef.current = null; // Clear stream reference
        audio.pause(); // Dừng âm thanh chuông khi dừng hiển thị màn hình gọi video
        audio.currentTime = 0; // Reset thời gian của audio về 0 để sẵn sàng cho lần phát kế tiếp
      } else {
        console.log("nothing to stop");
      }
    } catch (error) {
      toast.error("something wrong: " + error);
    }
  };

  useEffect(() => {
    const startCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
        });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          videoRef.current.play();
        }
        streamRef.current = stream; // Lưu trữ stream để có thể dừng video khi cần.
        if (!isMuted) {
          audio.play(); // Bắt đầu phát âm thanh chuông khi bắt đầu hiển thị màn hình gọi video
        }
      } catch (error) {
        console.error("Error accessing the camera: ", error);
      }
    };

    if (showModal) {
      console.log("showModal and prepare to open cam");
      startCamera();
    } else {
      console.log("close modal and prepare to close cam");
      stopCamera();
    }

    return () => {
      stopCamera();
    };
  }, [showModal]);

  const handleCloseModal = () => {
    stopCamera();
    setTimeout(() => {
      toggleVideoScreen();
    }, 100);
  };

  const toggleMute = () => {
    if (isMuted) {
      audio.play();
    } else {
      audio.pause();
      audio.currentTime = 0;
    }
    setIsMuted(!isMuted);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="relative h-full w-full max-w-full rounded-lg bg-white shadow-lg">
        <video
          ref={videoRef}
          className="h-full w-full rounded-t-lg object-cover"
          autoPlay
          muted
        />
        <div className="absolute inset-0 flex flex-col justify-between p-4">
          <div className="flex items-center justify-between">
            <div className="ml-20 flex items-center ">
              <img
                src={receiverAvatar}
                className="mr-4 h-12 w-12 rounded-full"
                alt={receiverName}
              />
              <h5 className="text-xl font-semibold">{receiverName}</h5>
            </div>
          </div>
          <div className="flex justify-center">
            <button
              type="button"
              className="m-4 rounded-full bg-[#BDBDBD] p-4 text-[#fff] hover:bg-[#757575]"
              onClick={toggleCallScreen}
            >
              <i className="fa-solid fa-video-slash" onClick={toggleMute}></i>
            </button>
            <button
              type="button"
              className="m-4 rounded-full bg-[#F44336] p-4 text-[#fff] hover:text-[#C62828]"
              onClick={handleCloseModal}
            >
              <i className="fa fa-times fa-2xl"></i>
            </button>
          </div>
        </div>
        {isMuted && (
          <audio src={ringingSound} autoPlay loop /> // Phát âm thanh chuông khi isMuted là true
        )}
      </div>
    </div>
  );
};

export default CallVideoScreen;
