/* eslint-disable no-plusplus */
// NOTE: replace 'ZsttT49OLjXFgV9ddXTkS2EuvLI3' with your Firebase auth user id (can be taken from Firebase)
export function seedDatabase(firebase) {
  const users = [
    {
      userId: "ZsttT49OLjXFgV9ddXTkS2EuvLI3",
      username: "David",
      fullName: "David Glover",
      emailAddress: "dayglow@gmail.com",
      following: ["2"],
      followers: ["2", "3", "4"],
      dateCreated: Date.now(),
    },
    {
      userId: "2",
      username: "elonMusk",
      fullName: "Elon Musk",
      emailAddress: "musk@gmail.com",
      following: [],
      followers: ["ZsttT49OLjXFgV9ddXTkS2EuvLI3"],
      dateCreated: Date.now(),
    },
    {
      userId: "3",
      username: "BillGates",
      fullName: "William Gates",
      emailAddress: "bgates@gmail.com",
      following: [],
      followers: ["ZsttT49OLjXFgV9ddXTkS2EuvLI3"],
      dateCreated: Date.now(),
    },
    {
      userId: "4",
      username: "JBezos",
      fullName: "Jeff Bezos",
      emailAddress: "jeff@bezos.com",
      following: [],
      followers: ["ZsttT49OLjXFgV9ddXTkS2EuvLI3"],
      dateCreated: Date.now(),
    },
  ];

  // eslint-disable-next-line prefer-const
  for (let k = 0; k < users.length; k++) {
    firebase.firestore().collection("users").add(users[k]);
  }

  // eslint-disable-next-line prefer-const
  for (let i = 1; i <= 5; ++i) {
    firebase
      .firestore()
      .collection("posts")
      .add({
        postId:i,
        userId: "2",
        post: "Who wants to go to Mars",
        likes: [],
        comments: [
          {
            displayName: "JBezos",
            comment: "With Blue Origin?",
          },
          {
            displayName: "BillGates",
            comment: "Last goooo!!",
          },
        ],
        userLatitude: "40.7128°",
        userLongitude: "74.0060°",
        dateCreated: Date.now(),
      });
  }
}
