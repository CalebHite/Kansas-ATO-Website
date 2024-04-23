import { initializeApp } from "firebase/app";
import { w as writable } from "./index.js";
import { collection, onSnapshot } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBh1UFfDoC9meS3PaU-ZC7Rujm7cidbyXI",
  authDomain: "ato-gamma-mu.firebaseapp.com",
  projectId: "ato-gamma-mu",
  storageBucket: "ato-gamma-mu.appspot.com",
  messagingSenderId: "933428144661",
  appId: "1:933428144661:web:575041f4ef34f27bc47c1c"
};
const app = initializeApp(firebaseConfig);
function collectionStore(firestore, ref, startWith = []) {
  let unsubscribe;
  if (!globalThis.window) {
    const { subscribe: subscribe2 } = writable(startWith);
    return {
      subscribe: subscribe2,
      ref: null
    };
  }
  if (!firestore) {
    console.warn("Firestore is not initialized. Are you missing FirebaseApp as a parent component?");
    const { subscribe: subscribe2 } = writable([]);
    return {
      subscribe: subscribe2,
      ref: null
    };
  }
  const colRef = typeof ref === "string" ? collection(firestore, ref) : ref;
  const { subscribe } = writable(startWith, (set) => {
    unsubscribe = onSnapshot(colRef, (snapshot) => {
      const data = snapshot.docs.map((s) => {
        return { id: s.id, ref: s.ref, ...s.data() };
      });
      set(data);
    });
    return () => unsubscribe();
  });
  return {
    subscribe,
    ref: colRef
  };
}
export {
  app as a,
  collectionStore as c
};
