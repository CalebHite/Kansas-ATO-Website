<script>
    import Navbar from "$lib/Navbar.svelte";
    import Contact from "$lib/Contact.svelte";
</script>
<body>
    <Navbar></Navbar>
    <div class="row">
        <div class="col"></div>
        <div class="col">
            <img src="/rcr.png">
            <h1 id="title">Philanthropy</h1>
            <p>Alpha Tau Omega at the University of Kansas has a strong history of philanthropy. This past year we raised over $8000 in donations to various charities. We participated in our community through work with marathons, special needs groups, and food banks.</p>
            <p>ATO won audience choice at Rock Chalk Revue, a theater competition raising money for the Ballard Center food bank. ATO raised roughly $4000 for the charity through this competition.</p>
            <p>We placed second in KU IFC's Chapters for Charity competition, in which we donated over $400 worth of food, hygiene supplies, and clothing for families in need.</p>        
        </div>
        <div class="col"></div>
    </div>
</body>
<footer>
    <Contact></Contact>
</footer>
<style>
    body{
        color: black;
        text-align: center;
        overflow-x: hidden;
    }
    h1{
        font-family: "Cormorant Garamond", serif;
    }
    p{
        font-family: "Inter", sans-serif;
        margin: 2%;
    }
    footer{
        text-align: left;
    }
    img{
        margin-top: 2%;
        margin-bottom: 2%;
    }
    .row{
        margin-bottom: 10%;
    }
</style>