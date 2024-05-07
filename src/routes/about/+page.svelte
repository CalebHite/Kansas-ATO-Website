<script>
    export const ssr = false;
    import { app } from '../../routes/firebase';
    import { collectionStore } from 'sveltefire';
    import { getFirestore  } from "firebase/firestore";
    import Navbar from '$lib/Navbar.svelte'
    import Contact from '$lib/Contact.svelte';

    // const firestore = getFirestore(app);

    const exec = [
        {
            name: 'Robert Boersma',
            pic: 'https://i.imgur.com/wRy9jYs.png',
            position: "Vice President"
        },
        {
            name: "John Hannigan",
            pic: "https://i.imgur.com/TXTUcyO.png",
            position: "Historian"
        },
        {
            name: "Lucas Mercer",
            pic: "https://i.imgur.com/mfplLoH.png",
            position: "Membership Education Chair"
        },
        {
            name: "Lucas Stanton",
            pic: "https://i.imgur.com/DjnqH9h.png",
            position: "Treasurer"
        },
        {
            name: "Walker Haber",
            pic: "https://i.imgur.com/5jKDQi1.png",
            position: "President"
        },
        {
            name: "David Streiler",
            pic: "https://i.imgur.com/IyoLUEP.png",
            position: "Secretary"
        },
        {
            name: "Kaler Lidgett",
            pic: "https://i.imgur.com/3vWR1k8.png",
            position: "Recruitment Chair"
        },
        {
            name: "Matthew Pino",
            pic: "https://i.imgur.com/qTYviFq.png",
            position: "Chaplain"
        },
        {
            name: "Caiden Parsons",
            pic :"https://i.imgur.com/3J53eGp.png",
            position: "Health and Safety"
        }
    ]
</script>
<body>
    <Navbar></Navbar>
    <img src="/Alpha_Tau_Omega_Coat_of_Arms.png" alt="coat of arms">
    <div class="row">   
        <div class="col"></div>
        <div class="col">
            <h1>"America's Leadership Development Fraternity"</h1>
            <p>In 1865 three men set out to form a new kind of fraternity, built upon Judeo-Christian roots, with a mission to bind together a country torn apart by the Civil War. Each chapter of ATO has a mission to build a brotherhood of leaders from all backgrounds, bound together by shared virtues and responsibilities.</p></div>
        <div class="col"></div>
    </div>
    <h1>Executive Board</h1>
    <div id="exec" class="row row-cols-3 justify-content-md-center">
        {#each exec as member}
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
    <!-- <div class="row">
        <div class="col"></div>
        <div class="col">
            <h1>Awards</h1>
            <p></p>
        </div>
        <div class="col"></div>
    </div> -->
</body>
<footer>
    <Contact></Contact>
</footer>
<style>
    body{
        padding-top: 10%;
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
    #exec{
        margin-left: 10%;
        margin-bottom: 1%;
    }
    footer{
        text-align: left;
    }
</style>