<script lang="ts">
    export const ssr = false;
    import { app } from './firebase';
    import { collectionStore } from 'sveltefire';
    import { getFirestore  } from "firebase/firestore";
    import Navbar from "../lib/Navbar.svelte"
    import Contact from "../lib/Contact.svelte"
    import { goto } from '$app/navigation';

    function goTo(link) {
		  goto(link);
	  }
  
    // const firestore = getFirestore(app);

    // const about = collectionStore(firestore, 'about');

    const about = [
      {
        desc: "Taus give back to their community through community service and philanthropic donations.",
        name: "Philanthropy and Community Service",
        path: "#",
        url: "https://i.imgur.com/BU0MtJy.png"
      },
      {
        desc:"Interested in greek life at KU? Get in contact with our recruitment chair and learn more about ATO.",
        name: "Recruitment Information",
        path: "/recruitment",
        url: "https://i.imgur.com/1U6YWcE.png"
      },
      {
        desc: "ATO at The University of Kansas holds a rich history of friendship, brotherhood, and campus leadership.",
        name: "History of Gamma Mu",
        path: "/history",
        url: "https://i.imgur.com/ZtME4Om.jpeg"
      }
    ]

  </script>

  <body>
    <Navbar></Navbar>
    <div id="page-1" class="page">
      <img src="/house.jpg" alt="The House" id='cover-image'>
      <div id="main-text">
        <h1 id="title">ATΩ</h1>
        <h2 id="subtitle">University of Kansas</h2>
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
        <div class="card" on:click={()=>goto("/philanthropy")}>
          <img src="https://i.imgur.com/BU0MtJy.png" class="card-img-top" alt="Philanthropy and Community Service">
          <div class="card-body"> 
            <h5 class="card-title">Philanthropy and Community Service</h5>
            <p class="card-text">Taus give back to their community through community service and philanthropic donations.</p>
          </div>
        </div>
        <div class="card" on:click={()=>goto("/recruitment")}>
          <img src="https://i.imgur.com/1U6YWcE.png" class="card-img-top" alt="Recruitment">
          <div class="card-body"> 
            <h5 class="card-title">Recruitment Information</h5>
            <p class="card-text">Interested in greek life at KU? Get in contact with our recruitment chair and learn more about ATO.</p>
          </div>
        </div>
        <div class="card" on:click={()=>goto("/history")}>
          <img src="https://i.imgur.com/ZtME4Om.jpeg" class="card-img-top" alt="History">
          <div class="card-body"> 
            <h5 class="card-title">History of Gamma Mu</h5>
            <p class="card-text">ATO at The University of Kansas holds a rich history of friendship, brotherhood, and campus leadership.</p>
          </div>
        </div>
      </div>
      <img alt="Coat of Arms" id="coat-of-arms" src="/Alpha_Tau_Omega_Coat_of_Arms.png">
    </div>
  </body>
  <footer>
    <Contact></Contact>
  </footer>
  <style>
    body{
      background: rgb(255,255,255);
      overflow-x: hidden;
    }
    hr{
      margin: 5% 0;
      border-top: 2px solid #FFAF38;
    }
    .card:hover{
      border-bottom: 2px solid #FFAF38;
      cursor: pointer;
    }
    .page{
      height: 100rem;
      width: 100%;
    }
    #main-text{
      position: absolute;
      top: 20%;
      left: 10%;
      align-items: center;
      text-align: center;
    }
    #title{
      font-size: 10rem;
      color: white;
    }
    #subtitle{
      font-family: "Cormorant Garamond", serif;
      font-size: 2rem;
      color: white;
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
    footer{
      text-align: left;
    }
  </style>