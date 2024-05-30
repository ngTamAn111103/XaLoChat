import { create } from "zustand";
import { doc, getDoc } from "firebase/firestore";
import { db } from "./firebase";
export const useUserStore = create((set) => ({
  // Người dùng hiện tại: Mặc định null
  currentUser: null,
  // Bật cứ khi nào có sự thay đổi
  isLoading: true,
  fetchUserInfo: async (uid) => {
    // Nếu người dùng đăng xuất
    if (!uid) {
      return set({ currentUser: null, isLoading: false });
    }

    // Nếu đang có UID người dùng
    try {
      const docRef = doc(db, "Profile", uid);
      const docSnap = await getDoc(docRef);

      //   Nếu lấy được dữ liệu
      if (docSnap.exists()) {
        console.log("userStore.js: Document data:", docSnap.data());
        set({ currentUser: docSnap.data(), isLoading: false });
      }
      //   Nếu không lấy được dữ liệu
      else {
        console.log("No such document!");
        set({ currentUser: null, isLoading: false });
      }
    } catch (error) {
      console.log(error);
      return set({ currentUser: null, isLoading: false });
    } finally {
    }
  },
}));
