import React, { useState } from "react";

function ProfileInfo({ label, value, isEditing, onSave }) {
  const [editedValue, setEditedValue] = useState(value);

  const handleSaveClick = () => {
    onSave(editedValue); // gửi giá trị mới của input về component cha để lưu
  };

  return (
    <>
      <p className="mb-1 font-sans text-sm text-[#7A7F9A]">{label}</p>
      {isEditing ? (
        <div className="mt-2 flex items-center">
          <input
            type="text"
            name="name"
            id="usrname"
            value={editedValue}
            onChange={(e) => setEditedValue(e.target.value)}
            className="form-control bg-soft-light w-[230px] rounded-md border border-[#CDCDCD] p-2 focus:outline-none"
            maxLength="20"
          />
          <button
            type="button"
            className="btn w-20 rounded bg-[#7269EF] p-2 text-[#fff]"
            onClick={handleSaveClick}
          >
            Save
          </button>
        </div>
      ) : (
        <h5 className="mb-4 font-sans text-xs font-bold">{value}</h5>
      )}
    </>
  );
}

export default ProfileInfo;
