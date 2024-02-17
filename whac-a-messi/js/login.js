import { collection, setDoc } from "firebase/firestore";
import { signInWithPopup } from "firebase/auth";
import { auth, db, googleProvider } from "./firebase.config.js";

const signIn = async () => {
    try {
        const collectionRef = collection(db, "users");
        const results = await signInWithPopup(auth, googleProvider);
        await setDoc(doc(collectionRef, results.user.uid), {
            displayName: results.user.displayName,
            photoURL: results.user.photoURL,
        });
    } catch (err) {
        console.error(err);
    }
};

const button = document.querySelector("button");
button.classList.add("bg-sky-700");
button.addEventListener("click", signIn);
