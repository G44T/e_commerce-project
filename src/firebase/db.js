import { collection, getDocs, getFirestore, query, orderBy, where, getDoc, doc, addDoc } from "firebase/firestore";
import { app } from '../firebase/config';

const db = getFirestore(app)

export const getItemsAll = async () => {
    const items = []

    const q = query(collection(db, "Products"), orderBy("category"));

    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {

        const item = {
            ...doc.data(),
            id: doc.id
        }

        items.push(item)
    });

    return items
}

export const getItemsCategory = async (category) => {
    const items = []

    const q = query(collection(db, "Products"), where("category", "==", category));

    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {

        const item = {
            ...doc.data(),
            id: doc.id
        }

        items.push(item)
    });

    return items
}

export const getItemsID = async (id) => {

    const items = []

    const docRef = doc(db, "Products", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        const item = {
            ...docSnap.data(),
            id: docSnap.id
        }

        items.push(item)
    }

    return items
}

export const createOrder = async (order) => {

    try {
        const docRef = await addDoc(collection(db, "Orders"), order);

        return docRef.id
        
    } catch (e) {
        console.log(e)
    }


}