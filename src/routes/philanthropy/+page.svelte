<script>
    import Navbar from "$lib/Navbar.svelte";
    import Contact from "$lib/Contact.svelte";
</script>
<body>
    <Navbar></Navbar>
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
    footer{
        text-align: left;
    }
</style>