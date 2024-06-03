import React, { useEffect, useRef, useState } from 'react';

const CallVideoScreen = ({ showModal, currentUser, toggleModal, toggleCallScreen }) => {
  const videoRef = useRef(null);
  const streamRef = useRef(null);
  const [audio] = useState(new Audio("/audio/nhac_cho.mp3")); // Sử dụng Audio để phát âm thanh chuông
  const [isMuted, setIsMuted] = useState(false); // State để kiểm soát trạng thái của âm thanh

  useEffect(() => {
    const startCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          videoRef.current.play();
        }
        streamRef.current = stream; // Lưu trữ stream để có thể dừng video khi cần.
        if (!isMuted) {
          audio.play(); // Bắt đầu phát âm thanh chuông khi bắt đầu hiển thị màn hình gọi video
        }
      } catch (error) {
        console.error('Error accessing the camera: ', error);
      }
    };

    const stopCamera = () => {
      if (videoRef.current && videoRef.current.srcObject) {
        const stream = videoRef.current.srcObject;
        const tracks = stream.getTracks();
        tracks.forEach(track => {
          track.stop(); // Dừng track của stream
          stream.removeTrack(track); // Gỡ bỏ track khỏi stream
        });
        videoRef.current.srcObject = null; // Dừng phát video.
        audio.pause(); // Dừng âm thanh chuông khi dừng hiển thị màn hình gọi video
        audio.currentTime = 0; // Reset thời gian của audio về 0 để sẵn sàng cho lần phát kế tiếp
      }
    };
    

    if (showModal) {
      startCamera();
    } else {
      stopCamera();
    }

    return () => {
      stopCamera();
    };
  }, [showModal, audio, isMuted]);

  const handleCloseModal = () => {
    toggleModal();
    toggleCallScreen();
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

  if (!showModal) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="relative max-w-full w-full h-full bg-white rounded-lg shadow-lg">
        <video
          ref={videoRef}
          className="w-full h-full object-cover rounded-t-lg"
          autoPlay
          muted
        />
        <div className="absolute inset-0 flex flex-col justify-between p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center ml-20 ">
              <img
                src={currentUser.Avatar}
                className="w-12 h-12 rounded-full mr-4"
                alt={currentUser.Fullname}
              />
              <h5 className="text-xl font-semibold">{currentUser.Fullname}</h5>
            </div>
          </div>
          <div className="flex justify-center">
            <button
              type="button"
              className="bg-[#BDBDBD] hover:bg-[#757575] text-[#fff] rounded-full p-4 m-4"
              onClick={toggleCallScreen}
            >
              <i class="fa-solid fa-video-slash" onClick={toggleMute}></i>
            </button>
            <button
              type="button"
              className=" bg-[#F44336] text-[#fff] hover:text-[#C62828] rounded-full p-4 m-4"
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
