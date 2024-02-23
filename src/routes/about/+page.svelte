<script>
    export const ssr = false;
    import { app } from '../../routes/firebase';
    import { collectionStore } from 'sveltefire';
    import { getFirestore  } from "firebase/firestore";
    import Navbar from '$lib/Navbar.svelte'
    import Contact from '$lib/Contact.svelte';

    const firestore = getFirestore(app);

    const exec = collectionStore(firestore, 'exec');
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
    <h1>Executive Board</h1>
    <div class="row row-cols-auto justify-content-md-center">
        {#each $exec as member}
            <div class="col">
                <div class="card" style="width: 18rem;">
                    <img src="{member.pic}" class="card-img-top" alt="{member.name}">
                    <div class="card-body">
                        <h5 class="card-title">{member.name}</h5>
                        <p class="card-text">{member.position}</p>
                    </div>
                </div>
            </div>
        {/each}
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
<footer>
    <Contact></Contact>
</footer>
<style>
    body{
        overflow-x: hidden;
        text-align: center;
        align-items: center;
    }
    h1{
        margin: 5% 0%;
        font-family: "Cormorant Garamond", serif;
        font-size: 3rem;
        padding-bottom: .5rem;
        border-bottom: 1px solid #FFAF38;
    }
    p{
        font-family: "Inter", sans-serif;
    }
    .card{
        margin: 1%;
    }
    .card-title{
        font-family: "Cormorant Garamond", serif;
        font-size: 2rem;
    }
    .card-text{
        font-family: "Inter", sans-serif;
    }
    footer{
        text-align: left;
    }
</style>