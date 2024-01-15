<script lang="ts">
    export const ssr = false;
    import { app } from './firebase';
    import { collectionStore } from 'sveltefire';
    import { getFirestore  } from "firebase/firestore";
    // import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
  
    const firestore = getFirestore(app);

    const pictures = collectionStore(firestore, 'pictures');
  
    // Add this when creating the page to add pictures.
    //  \/\/\/\/\/
    // function newItem(id: number, name: string, desc: string, time: number, completeBy: string) {
    //   if(name != "" && desc != "" && time !> 0 && time != null && completeBy != ""){
    //     addDoc(collection(firestore, "items"), {
    //     name: name,
    //     desc: desc,
    //     time: time,
    //     completeBy: completeBy
    //   });
    //   }
    // }
  
    // function delItem(id: string){
    //   deleteDoc(doc(firestore, "items", id));
    // }
  
  </script>
    <p>ATO Gamma Mu</p> 
    {#each $pictures as p}
        <img src="{p.url}" alt="{p.alt}">
    {/each}