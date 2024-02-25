<script>
    import Navbar from "$lib/Navbar.svelte";
    import Contact from "$lib/Contact.svelte";
</script>
<body>
    <Navbar></Navbar>
    <h1>History of Gamma Mu</h1>
    <div class="row">
        <div class="col"></div>
        <div class="col-wide">
            <div class="card">
                <div class="card-body">
                    <h1 class="card-title">Beginnings of ATO</h1>
                    <p>"Alpha Tau Omega began as an idea in the mind of a young Civil War veteran who wanted peace and reconciliation. His name was Otis Allan Glazebrook. His people were defeated, many of their cities burned, much of their countryside ravaged. But Glazebrook, who had helped bury the dead of both sides, believed in a better future. He saw the bitterness and hatred that followed the silencing of the guns and knew that a true peace would come not from force of law, but rather from with the hearts of men who were willing to work to rekindle a spirit of brotherly love."</p>
                </div>
            </div>
        </div>
        <div class="col"></div>
    </div>
    <div class="row">
        <div class="col"></div>
        <div class="col-wide">
            <div class="card">
                <div class="card-body">
                    <h1 class="card-title">Our Chapter</h1>
                    <p>Gamma Mu was founded in 1901 with slow but sustainable growth in the early years. In the 1940's we built our chapter house at 1537 Tennessee Street, which is the same house we live in today. By the 1980's we had grown into one of the largest and strongest brotherhoods on campus. Even after over 100 years, we still maintain the original values we were founded with. Values of fellowship, scholarship, and strong character.</p>
                </div>
            </div>
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
    }
    h1{
        font-family: "Cormorant Garamond", serif;
    }
    p{
        font-family: "Inter", sans-serif;
    }
    .row{
        margin: 5%;
    }
    footer{
        text-align: left;
    }
</style>