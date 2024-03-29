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



export const getImage = async (location) => {
  const storage = getStorage();
  const ImageURL = await getDownloadURL(ref(storage, location));
  return ImageURL;
}