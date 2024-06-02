
export function SendImage({ src, handleDelete,caption='' }) {

  return (
    <>
      {/* đây là hình ảnh được chọn */}

      <div className={`shake-imgs relative h-24 w-24 overflow-hidden`}>
        <a href={src} data-fancybox="gallery" data-caption={caption}>
          <img
            className="h-full w-full rounded-md border-2 border-[#060375] bg-bs-dark"
            src={src}
          />
        </a>
        <button
          className="absolute right-2 top-2 h-4 w-4 rounded-full bg-black text-lg shadow"
          onClick={handleDelete}
        >
          <i className="fa-solid fa-circle-xmark -translate-x-2/2 absolute -translate-x-1/2 -translate-y-1/2 text-white"></i>
        </button>
      </div>
      {/* end */}
    </>
  );
}
