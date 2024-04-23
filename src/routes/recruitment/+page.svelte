<script>
    import Navbar from "$lib/Navbar.svelte";
    import Contact from "$lib/Contact.svelte";
</script>
<body>
    <Navbar></Navbar>
    <h1 id="title">Recruitment Information</h1>
    <div id="bg">
    <div class="row">
        <div class="col">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Recruitment Chair</h5>
                <p class="card-text">Kaler Lidgett</p>
                <p class="card-text">913-223-4412</p>
                <p class="card-text">kansasatorecruit@gmail.com</p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Rush Chairmen</h5>
                <p class="card-text">Caden Clark 913-568-6583</p>
                <p class="card-text">Ryan Fohlmeister 913-703-9298</p>
                <p class="card-text">Kyle Dime 972-898-3117</p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Membership Requirements</h5>
                <p class="card-text">Cumulative 2.8 GPA</p>
                <p class="card-text">15 Total Community Service Hours</p>
                <p class="card-text">2 Years Living In House</p>
                <p class="card-text">Completion of Membership Development Program</p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <div class="card-body">
                <h5>Interest Form</h5>
                <p><a href="https://docs.google.com/forms/d/e/1FAIpQLSf0MlWE9JzLRiTIXq1nxcGpsn68opT48nqCQNJUW4RklEdeDQ/viewform?usp=sf_link">Click Here</a></p>
              </div>
            </div>
          </div>
    </div>
    <div class="accordion" id="accordionPanelsStayOpenExample">
        <h1 class="accordion-title">FAQ:</h1>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                Isn't it expensive to join a fraternity?
            </button>
          </h2>
          <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show">
            <div class="accordion-body">
              <strong>Yes and no.</strong>
              There are additional costs for local and national dues. However, those costs go directly back to you in the form of upgrades to the house, social events, and other resources. Also, there are scholarships and financial aid available which can make affording those dues extremely doable.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
              How will joining a fraternity affect my grades?
            </button>
          </h2>
          <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse">
            <div class="accordion-body">
              <strong>If anything, a fraternity will benefit your grades.</strong>
              There are many resources that become available when you join a fraternity. You will have classes with other members and will be able to talk to people who have already taken the classes you are in. We also have a library with study guides, textbooks, and exams from previous years. 
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
              Am I still able to participate in other activities outside of the fraternity?
            </button>
          </h2>
          <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse">
            <div class="accordion-body">
              <strong>Yes. Outside activities are strongly encouraged.</strong>
              At least one outside activity is required for initiation and you will definitely have time to attend almost all required meetings/practices. Because of ATO's strong campus presence, there is a good chance that you will have brothers in almost any extracurricular you sign up for.
            </div>
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
        text-align: center;
        overflow-x: hidden;
    }
    #bg{
      padding-top: 1%;
      background-image: url("/recruitment.jpg");
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      background-color: black;
    }
    h1{
        font-family: "Cormorant Garamond", serif;
        color: black;
      }
    h2{
        font-family: "Inter", sans-serif;
        font-size: 1.5rem;
    }
    P{
        font-family: "Inter", sans-serif;
    }
    .row{
        padding-bottom: 10%;
        margin: 1%;
    }
    
    .accordion{
        text-align: left;
        background: white;
    }
    .accordion-title{
      text-align: center;
    }
    footer{
        text-align: left;
    }
</style>