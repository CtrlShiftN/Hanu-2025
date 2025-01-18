import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc, getDoc, updateDoc, deleteDoc } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBae9o1bR-Rm3xlV74ON2VVTuHhf9dHxU8",
    authDomain: "react-native-course-2f9bc.firebaseapp.com",
    databaseURL: "https://react-native-course-2f9bc-default-rtdb.firebaseio.com",
    projectId: "react-native-course-2f9bc",
    storageBucket: "react-native-course-2f9bc.appspot.com",
    messagingSenderId: "484348690065",
    appId: "1:484348690065:web:e56dde4a6ed3c347f74930"
};
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export async function writeDataToFirestore(collection, document, data) {
    try {
        const ref = doc(firestore, collection, document)
        await setDoc(ref, data);
    } catch (error) {
        return error;
    }
}

export async function checkIfDocExist(collection, document) {
    try {
        const docRef = doc(firestore, collection, document);
        const docSnap = await getDoc(docRef);
        return docSnap.exists();
    } catch (error) {
        return error;
    }
}
export async function getUserDataFirebase(collection, document) {
    try {
        const docRef = doc(firestore, collection, document);
        const docSnap = await getDoc(docRef);
        return docSnap.data();
    } catch (error) {
        return error;
    }
}
export async function updateUserData(collection, document, newData) {
    try {
        const docRef = doc(firestore, collection, document);
        await updateDoc(docRef, newData);
    } catch (error) {
        return error;
    }
}
export async function deleteDocument(collection, document) {
    try {
        const docRef = doc(firestore, collection, document);
        await deleteDoc(docRef);
        console.log("Document deleted successfully!");
    } catch (error) {
        console.error("Error deleting document: ", error);
        throw error;
    }
}
