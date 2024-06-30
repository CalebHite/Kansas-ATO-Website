<script>
    import Navbar from "$lib/Navbar.svelte";
    import Contact from "$lib/Contact.svelte";
</script>
<body>
    <Navbar></Navbar>
    <div id="bg">
      <h5 id="title">Rush ATΩ</h5>
    </div>
    <div class="container">
      <h1>Join ATΩ at The University of Kansas</h1>
      <p id="subtext">Joining a fraternity will help you make connections and meet people you will know long after college. Choosing a fraternity is an important decision and the rush process helps with this. Getting in contact with a rush chair will let you take a tour of the house, talk to current members, and get helpful information about ATO.</p>
      <h3>Recruitment Process:</h3>
      <ul>
        <li>Fill out the Rush Interest Form</li>
        <li>Reach out to a Rush Chair</li>
        <li>Attend rush events and house tours</li>
        <li>Get to know ATO brothers and other future ATOs</li>
        <li>Once offered, sign your official ATO bid card</li>
      </ul>
      <a href="https://docs.google.com/forms/d/e/1FAIpQLSf0MlWE9JzLRiTIXq1nxcGpsn68opT48nqCQNJUW4RklEdeDQ/viewform?usp=sf_link"><button class="btn btn-primary btn-large">Interest Form</button></a>
      <div class="row">
          <div class="col">
            <div class="card">
              <div class="card-body">
                <img class="card-img-top chairman-img" src="/ryan.png" alt="Card image cap">
                <h5 class="card-title">Ryan Fohlmeister</h5>
                <p class="card-text">Rush Chair</p>
                <p class="card-text">Kansas City</p>
                <p class="card-text">913-703-9298</p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <div class="card-body">
                <img class="card-img-top chairman-img" src="https://i.imgur.com/3vWR1k8.png" alt="Card image cap">
                <h5 class="card-title">Kaler Lidgett</h5>
                <p class="card-text">Recruitment Chairman</p>
                <p class="card-text">913-223-4412</p>
                <p class="card-text">kansasatorecruit@gmail.com</p>
              </div>
            </div>
          </div>  
          <div class="col">
            <div class="card">
              <div class="card-body">
                <img class="card-img-top chairman-img" src="/dizzy.png" alt="Card image cap">
                <h5 class="card-title">Kyle Dime</h5>
                <p class="card-text">Rush Chair</p>
                <p class="card-text">Dallas</p>
                <p class="card-text">972-898-3117</p>
              </div>
            </div>
          </div>
    </div>
      
</body>
<footer>
    <Contact></Contact>
</footer>
<style>
    body{
        overflow-x: hidden;
    }
    #bg{
      padding-top: 22%;
      padding-bottom: 15%;
      background-image: url("/recruitment.JPG");
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      background-color: black;
    }
    #title{
        font-size: 6rem;
        color: white;
        text-align: center;
    }
    #subtext{
      width: 70%;
      margin-bottom: 3%
    }

    h2{
        font-family: "Inter", sans-serif;
        font-size: 1.5rem;
    }
    h3{
      text-align: left;
    }
    P{
        font-family: "Inter", sans-serif;
    }
    li{
      text-align: left;
    }
    .btn{
      margin-bottom: 3%;
    }
    .container{
        padding-bottom: 10%;
        margin: 1%;
        margin-left: 7%;
    }
    .row{
      margin-top: 2%;
    }
    .card{
      text-align: center;
    }
    .chairman-img{
      width: 18rem;
      height: 24rem;
      margin-bottom: 2%;
    }
    footer{
        text-align: left;
    }
</style>