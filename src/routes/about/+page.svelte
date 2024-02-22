<script>
    import Navbar from '$lib/Navbar.svelte'
    import Contact from '$lib/Contact.svelte';
</script>
<body>
    <Navbar></Navbar>
    <img src="src\lib\Alpha_Tau_Omega_Coat_of_Arms.png" alt="coat of arms">
    <div class="row">   
        <div class="col"></div>
        <div class="col">
            <h1>"America's Leadership Development Fraternity"</h1>
            <p>In 1865 three men set out to form a new kind of fraternity, built upon Judeo-Christian roots, with a mission to bind together a country torn apart by the Civil War. Each chapter of ATO has a mission to build a brotherhood of leaders from all backgrounds, bound together by shared virtues and responsibilities.</p></div>
        <div class="col"></div>
    </div>
    <div class="row">
        <div class="col"></div>
        <div class="col">
            <h1>Executive Board</h1>
        </div>
        <div class="col"></div>
    </div>
    <div class="row">
        <div class="col"></div>
        <div class="col">
            <h1>Awards</h1>
            <p></p>
        </div>
        <div class="col"></div>
    </div>
</body>
<Contact></Contact>
<style>
    body{
        overflow-x: hidden;
        text-align: center;
        align-items: center;
        margin-bottom: 10%;
    }
    h1{
        margin-top: 5%;
        font-family: "Cormorant Garamond", serif;
        font-size: 3rem;
    }
    p{
        font-family: "Inter", sans-serif;
    }
</style>