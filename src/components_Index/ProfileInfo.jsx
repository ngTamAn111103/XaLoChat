import React, { useState } from "react";
import { getFirestore, doc, updateDoc } from "firebase/firestore";
import { useUserStore } from "../lib/userStore";
import { toast } from "react-toastify";

function ProfileInfo({ label, value, isEditing, onSave }) {
  const [editedValue, setEditedValue] = useState(value);
  const { currentUser } = useUserStore();

  const handleSaveClick = async () => {
    onSave(editedValue);
    // TA: Backend: Xử lý update doc
    try {
      // Cập nhật trên Firebase Realtime Database
      const db = getFirestore();  // Thay getDatabase bằng getFirestore
      const profileRef = doc(db, "Profile", currentUser.ID); // Thay ref bằng doc
      await updateDoc(profileRef, { // Thay update bằng updateDoc
          Fullname: editedValue 
      });
      
      console.log("Cập nhật fullname thành công!");
      toast("Cập nhật thành công!")

    } catch (error) {
      console.error("Lỗi khi cập nhật fullname:", error);

      
    }
    

   

    
    
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
