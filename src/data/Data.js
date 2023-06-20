import { collection, query, getDocs, getDoc, doc } from "firebase/firestore";
import { db } from "../firestore";
import { getStorage, ref, getDownloadURL } from "firebase/storage";

export const getPosts = async () => {
  const blogs = query(collection(db, "post"));
  const querySnapshot = await getDocs(blogs);
  const posts = [];
  querySnapshot.forEach((post) => {
    // doc.data() is never undefined for query doc snapshots
    console.log(post.id, " => ", post.data());
    posts.push({
      id: post.id,
      ...post.data(),
    });
  });
  return posts;
};

export const getPost = async (id) => {
  const docRef = doc(db, "post", id);
  const docSnap = await getDoc(docRef);

  if (!docSnap.exists) {
    return;
  }

  return { id: docSnap.id, ...docSnap.data() };
};


// get markdown url using blogUrl (firebase storage)
// TODO: The operation 'getDownloadURL' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png')
export const getPostBody = async (postUrl) => {
  const storage = getStorage();
  const starsRef = ref(storage, postUrl);
  console.log('post url: ' + postUrl);

  getDownloadURL(starsRef) 
    .then((url) => {
      const xhr = new XMLHttpRequest();
      xhr.responseType = 'blob';
      xhr.onload = (event) => {
        const blob = xhr.response;
      };
      xhr.open('GET', url);
      xhr.send();
      console.log('success url: ' + xhr);
    })
    // .catch()

}