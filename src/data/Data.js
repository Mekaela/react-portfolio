
import { collection, query, getDocs } from "firebase/firestore";
import {db} from '../firestore';

export const getPosts = async () => {
    const q = query(collection(db, "post"));

    const querySnapshot = await getDocs(q);
    const posts = [];
    querySnapshot.forEach((post) => {
    // doc.data() is never undefined for query doc snapshots
    console.log(post.id, " => ", post.data());
        posts.push({
            id: post.id,
            ...post.data()
        })
    });
    return posts;
};

// export const getPost = async (id) => {
//     const col = firestore.collection('post');
//     const ref = col.doc(id);
//     const doc =  await ref.get();

//     if(!doc.exists) {
//         return;
//     }

//     return { id: doc.id, ...doc.data() };
// };