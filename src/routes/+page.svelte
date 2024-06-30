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
      <img src="/house.JPEG" alt="The House" id='cover-image'>
      <div id="main-text">
        <h1 id="title">ATΩ</h1>
        <h2 id="subtitle">Gamma Mu / University of Kansas</h2>
        <h3>Founded 1901</h3>
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
    </div>
      <div id="page-4" class="page">
        <div class="container about">
          <div class="row">
              <h1>About ATO</h1>
              <p></p>
              <a href="/about"><button type="button" class="btn btn-primary about-btn">Read More</button></a>
          </div>
        </div>
      </div>
      <div class="container">
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
      height: 40rem;
      width: 100%;
      overflow: hidden;
    }
    #page-1{
      height: 105rem;
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
    h3{
      color: white;
      font-family: "Cormorant Garamond", serif;
      font-style: italic;
    }
    #cover-image{
      width: 95rem;
      filter: brightness(70%);
    }
    #page-2{
      background: rgb(255,255,255);
      background-image: url("../src/lib/asfalt.png");
      position: relative;
      margin-top: -60rem;
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
    .email{
      margin-top: 10%;
      margin-left: 10%;
      text-align: left;
      margin-bottom: 10%;
    }
    .coa{
      margin-left: 30%;
    }
    .carousel-item{
      margin-top: 5%;
      margin-bottom: 5%;
    }
    .about{
      text-align: left;
      margin-left: 15%;
      margin-bottom: 5%;
    }
    .about-btn{
      width: 10%
    }
    .carousel{
      width: 50%;
      height: 4rem;
      margin-bottom: 40%;
      margin-left: 20%;
    }
    footer{
      text-align: left;
    }
  </style>