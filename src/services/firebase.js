import { firebase} from '../lib/firebase';

export async function doesUsernameExist(username) {
    const result = await firebase
        .firestore()
        .collection('users')
        .where('username', '==', username)
        .get()
    
    return result.docs.map((user)=>user.data().length>0)
}

export async function getUserByUserId(userId) {
    const result = await firebase
      .firestore()
      .collection("users")
      .where("userId", "==", userId)
        .get();
    
    const user = result.docs.map((item) => ({
        ...item.data(),
        docId:item.id
    }))
    return user;
    
}

// export async function getPost() {
//     const result = await firebase
//         .firestore()
//         .collection('post')
//         .get();
//     const posts = result.docs.map((post) => ({
//         ...post.data()
//     }))
//     return posts
// }