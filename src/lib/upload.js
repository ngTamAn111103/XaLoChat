// TA: Backend
const upload = async (file)=>{

    const storageRef = ref(storage, 'images/rivers.jpg');
    
    const uploadTask = uploadBytesResumable(storageRef, file);
    
   
    uploadTask.on('state_changed', 
      (snapshot) => {
      
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        switch (snapshot.state) {
          case 'paused':
            console.log('Upload is paused');
            break;
          case 'running':
            console.log('Upload is running');
            break;
        }
      }, 
      (error) => {
        // Handle unsuccessful uploads
      }, 
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log('File available at', downloadURL);
        });
      }
    );
}
export default upload