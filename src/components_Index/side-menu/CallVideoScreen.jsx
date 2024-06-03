import React, { useEffect, useRef } from 'react';

const CallVideoScreen = ({ showModal, currentUser, toggleModal, toggleCallScreen }) => {
  const videoRef = useRef(null);
  const streamRef = useRef(null);

  useEffect(() => {
    const startCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          videoRef.current.play();
        }
        streamRef.current = stream; // Lưu trữ stream để có thể dừng video khi cần.
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
  }, [showModal]);

  const handleCloseModal = () => {
    toggleModal();
    toggleCallScreen();
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
              <i class="fa-solid fa-video-slash"></i>
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
      </div>
    </div>
  );
};

export default CallVideoScreen;
