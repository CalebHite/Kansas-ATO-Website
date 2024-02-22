<script lang="ts">
    export const ssr = false;
    import { app } from './firebase';
    import { collectionStore } from 'sveltefire';
    import { getFirestore  } from "firebase/firestore";
    import Navbar from "../lib/Navbar.svelte"
    import Contact from "../lib/Contact.svelte"
    // import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
  
    const firestore = getFirestore(app);

    const about = collectionStore(firestore, 'about');
  
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

  <body>
    <Navbar></Navbar>
    <div id="page-1" class="page">
      <img src="../src/lib/house.jpg" alt="The House" id='cover-image'>
      <div id="main-text">
        <img src="../src/lib/alpha-tau-omega-logo.png" alt="logo" id="logo">
        <h2 id="subtitle">Gamma Mu</h2>
      </div>
    </div>
    <div class="page" id="page-2">
      <hr>
      <div class="container text-center">
        <div class="row">
          <div class="col"></div>
          <div class="col">
            <h1 id="quote">"To Bind Men Together..."</h1>
            <p id="description">Alpha Tau Omega at The University of Kansas is a brotherhood lasting over a century, allowing people from all backgrounds to improve as both leaders and men.</p>
          </div>
          <div class="col"></div>
        </div>
      </div>
      <hr>
      <div class="card-group">
        {#each $about as card}
        <div class="card" on:click={window.location.href = card.path}>
          <img src="{card.url}" class="card-img-top" alt="{card.name}">
          <div class="card-body"> 
            <h5 class="card-title">{card.name}</h5>
            <p class="card-text">{card.desc}</p>
          </div>
        </div>
      {/each}
      </div>
      <img alt="Coat of Arms" id="coat-of-arms" src="../src/lib/Alpha_Tau_Omega_Coat_of_Arms.png">
    </div>
    <Contact></Contact>
  </body>
  
  <style>
    body{
      background: rgb(255,255,255);
      overflow-x: hidden;
    }
    hr{
      margin: 5% 0;
      border-top: 2px solid #FFAF38;
    }
    .page{
      height: 100rem;
      width: 100%;
    }
    #main-text{
      position: absolute;
      align-items: center;
      text-align: center;
      top: 35%;
      left: 40%;
    }
    #subtitle{
      margin-left: 20%;
      font-family: "Cormorant Garamond", serif;
      font-size: 2rem;
      color: #e3e3e3;
    }
    #logo{
      width: 120%;
    }
    #cover-image{
      width: 95rem;
    }
    #page-2{
      background: rgb(255,255,255);
      background-image: url("../src/lib/asfalt.png");
      position: relative;
      margin-top: -56rem;
      z-index: 2;
      text-align: center;
    }
    #quote{
      font-family: "Cormorant Garamond", serif;
      color: black;
      font-size: 4rem;
    }
    #description{
      color: black;
      font-family: "Inter", sans-serif;
      font-size: 1.2rem;
    }
    .card{
      border: none;
    }
    .card:hover{
      border-bottom: 2px solid #FFAF38;
      cursor: pointer;
    }
    .card-title{
      font-family: "Cormorant Garamond", serif;
      font-size: 1.7rem;
    }
    .card-text{
      font-family: "Inter", sans-serif;
      font-size: 1rem;
    }
    #coat-of-arms{
      margin-top: 10%;
    }
  </style>