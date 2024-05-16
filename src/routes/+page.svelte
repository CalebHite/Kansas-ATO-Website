<script lang="ts">
    export const ssr = false;
    import { app } from './firebase';
    import { collectionStore } from 'sveltefire';
    import { getFirestore  } from "firebase/firestore";
    import Navbar from "../lib/Navbar.svelte"
    import Contact from "../lib/Contact.svelte"
    import { goto } from '$app/navigation';

    let subject = '';
    let body = '';

    function goTo(link) {
		  goto(link);
	  }
  
    // const firestore = getFirestore(app);

    // const about = collectionStore(firestore, 'about');

  </script>

  <body>
    <Navbar></Navbar>
    <div id="page-1" class="page">
      <img src="/house.jpg" alt="The House" id='cover-image'>
      <div id="main-text">
        <h1 id="title">ATΩ</h1>
        <h2 id="subtitle">Gamma Mu / University of Kansas</h2>
      </div>
    </div>
    <div class="page" id="page-2">
      <hr>
      <div class="container text-center big-text">
        <div class="row">
          <div class="col quote-side"></div>
          <div class="col">
            <h1 id="quote">"To Bind Men Together..."</h1>
            <p id="description">Alpha Tau Omega at The University of Kansas is a brotherhood lasting over a century, allowing people from all backgrounds to improve as both leaders and men.</p>
          </div>
          <div class="col quote-side"></div>
        </div>
      </div>
      <hr>
      
      <div class="row email">
        <div class="col">
          <h1>Email Us</h1>
          <label class="form-label" for="name">Name</label>
          <input class="form-control" id="name" type="text" placeholder="Name" />
          <label class="form-label" for="emailAddress">Email Address</label>
          <input class="form-control" id="emailAddress" type="email" placeholder="Email Address" />
          <label class="form-label" for="message">Message</label>
          <textarea class="form-control" id="message" type="text" placeholder="Message" style="height: 10rem;"></textarea>
          <br>
          <button class="btn btn-primary btn-lg" type="submit">Submit</button>
        </div>
        <div class="col">
          <img src="/Alpha_Tau_Omega_Coat_of_Arms.png" class="coa" alt="">
        </div>
      </div>
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
      margin-bottom: 5%;
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
    .email{
      margin-top: 10%;
      margin-left: 10%;
      text-align: left;
    }
    .coa{
      margin-left: 30%;
    }
    #carousel{
      width: 60%;
      margin-left: 20%;
    }
    footer{
      text-align: left;
    }
  </style>