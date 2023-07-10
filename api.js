import { initializeApp } from "firebase/app";
import { collection, getFirestore, getDocs, doc, query, getDoc, where } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyA1dRO62vGMYmz66lKBkezT1z40jf6InnU",
  authDomain: "vanlife-f150a.firebaseapp.com",
  projectId: "vanlife-f150a",
  storageBucket: "vanlife-f150a.appspot.com",
  messagingSenderId: "203557071780",
  appId: "1:203557071780:web:aa20f69a3d83f660dcaf31"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

const vansCollectionRef = collection(db, "vans")




export async function getVans() {
   const querySnapshot = await getDocs(vansCollectionRef)
   const dataArr = querySnapshot.docs.map(doc =>({
    ...doc.data(),
    id: doc.id
   }))
   return dataArr
}

export async function getVan(id) {
   const docRef = doc(db, "vans", id)
   const vanSnapshot = await getDoc(docRef)
   return {
    ...vanSnapshot.data(),
    id: vanSnapshot.id
   }
}


export async function getHostVans() {
    const q = query(vansCollectionRef, where("hostId","==", "123") )
    const querySnapshot = await getDocs(q)
    const dataArr = querySnapshot.docs.map(doc =>({
     ...doc.data(),
     id: doc.id
    }))
    return dataArr
 }


// export async function getHostVans(id) {
//     const url = id ? `/api/host/vans/${id}` : "/api/host/vans"
//     const res = await fetch(url)
//     if (!res.ok) {
//         throw {
//             message: "Failed to fetch vans",
//             statusText: res.statusText,
//             status: res.status
//         }
//     }
//     const data = await res.json()
//     return data.vans
// }

export async function loginUser(creds) {
    const res = await fetch("/api/login",
        { method: "post", body: JSON.stringify(creds) }
    )
    const data = await res.json()

    if (!res.ok) {
        throw {
            message: data.message,
            statusText: res.statusText,
            status: res.status
        }
    }

    return data
}
    // export async function getVans(id) {
    //     const url = id ? `/api/vans/${id}` : "/api/vans"
    //     const res = await fetch(url)
    //     if (!res.ok) {
    //         throw {
    //             message: "Failed to fetch vans",
    //             statusText: res.statusText,
    //             status: res.status
    //         }
    //     }
    //     const data = await res.json()
    //     return data.vans
    // }