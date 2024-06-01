

export const fakeFriendList = [
  {
    uid: 1, 
    isOnline: false,
    notifycation: 3,
    avatar: "avatar-tinder.jpg",
    name: "No",
    newestMessage: "Tải app tìm bạn ngay",
    time: "09:00 PM",
    isSentFile: true,
  },
  {
    uid: 2, 
    isOnline: true,
    notifycation: 3,
    avatar: "avatar-tinder.jpg",
    name: "Tinder",
    newestMessage: "Tải app tìm bạn ngay",
    time: "09:00 PM",
    onClickFriend: () => handleClickButton(3),
    isSentFile: true,
  },
  {
    uid: 3, 
    isOnline: true,
    notifycation: 3,
    avatar: "avatar-girl.jpg",
    name: "Girl without message",
    newestMessage: "Hi, look at this image!",
    time: "09:00 PM",
    onClickFriend: () => handleClickButton(3),
    isSentImage: true,
  },
  {
    uid: 4, 
    isOnline: true,
    notifycation: 3,
    avatar: "avatar-girl.jpg",
    name: "Girl",
    newestMessage: "Hi, look at this image!",
    time: "09:00 PM",
    onClickFriend: () => handleClickButton(3),
    isSentImage: true,
  },
];

export const fakeMessages = {
    "1":  [
      {
        uid: 1,
        createdAt: "9:00",
        mes: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore laudantium doloremque debitis dicta, excepturi temporibus pariatur perferendis culpa optio rem aspernatur nam consequatur eligendi eius iste aut provident, ad a.," ,
     
      },
      {
        uid: 1,
        createdAt: "9:01",
        mes: "tin nhắn thôi mà",
     
      },
      {
        uid: 1,
        createdAt: "9:02",
        mes: "tin nhắn thôi mà",
     
      },
      {
        uid: 0,
        createdAt: "9:02",
        mes: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore laudantium doloremque debitis dicta, excepturi temporibus pariatur perferendis culpa optio rem aspernatur nam consequatur eligendi eius iste aut provident, ad a., ",
      },
      {
        uid: 0, 
        createdAt: "9:02",
        mes: "tin nhắn thôi mà2",
      },
      {
        uid: 1,
        createdAt: "9:02",
        mes: "tin nhắn thôi mà",
     
      },
      {
        uid: 1,
        createdAt: "9:02",
        mes: "tin nhắn thôi mà",
     
      },
      {
        uid: 0,
        createdAt: "9:02",
        mes: "tin nhắn thôi mà",
     
      },
      ],
    "2" : [
      {
        uid: 2,
        createdAt: "9:00",
        mes: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore laudantium doloremque debitis dicta, excepturi temporibus pariatur perferendis culpa optio rem aspernatur nam consequatur eligendi eius iste aut provident, ad a.," ,
      },
      {
        uid: 0,
        createdAt: "9:01",
        mes: "tin nhắn thôi mà2",
     
      },

      ],
    "4" : [
      {
        uid: 4, 
        createdAt: "9:00",
        mes: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore laudantium doloremque debitis dicta, excepturi temporibus pariatur perferendis culpa optio rem aspernatur nam consequatur eligendi eius iste aut provident, ad a.," ,
     
      },
      {
        uid: 0,
        createdAt: "9:01",
        mes: "tin nhắn thôi mà2",
     
      },

      ],
}


// Tạo mảng userProfile
export const userProfile = {
  avatarSrc: "./images/avt.png",
  name: "Patricia Smith",
  activityStatus: "Active",
  description:
    "If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual.",
};

// Tạo mảng profileDetails
export const profileDetails = [
  { label: "Name", value: "Patricia Smith" },
  { label: "Email", value: "adc@123.com" },
  { label: "Time", value: "11:40 AM" },
  { label: "Location", value: "California, USA" },
];

// Tạo mảng profileSetting
export const profileSetting = {
  avatarSrc: "./images/avt.png",
  name: "Patricia Smith",
};

// Tạo mảng UserChat
export const userChat = {
  avatarSrc: "./images/avt.png",
  name: "Patricia Smith",
}

//ds tìm kiếm 
 export const fakeSearch = [
    {
      uid: 1,
      avatar: "avatar-girl.jpg",
      name: "Nguyen van A",
      email: "nva@gmail.com",
    },
    {
      uid: 2,
      name: "Nguyen van A",
      avatar: "avatar-girl.jpg",
      email: "nva@gmail.com",
    },
    {
      uid: 2,
      name: "Nguyen van A",
      avatar: "avatar-girl.jpg",
      email: "nva@gmail.com",
    },
  ];
