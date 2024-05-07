import { c as create_ssr_component } from "./ssr.js";
const Navbar_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: 'body.svelte-111nydz{background:rgb(255,255,255);position:sticky;overflow:hidden}.nav-link.svelte-111nydz{font-family:"Cormorant Garamond", serif;color:black;font-size:1.5rem;border-left:2px solid #FFAF38}.nav-link.svelte-111nydz:hover{color:white;background:#FFAF38}',
  map: null
};
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<body class="svelte-111nydz" data-svelte-h="svelte-q0mtpt"><nav class="navbar navbar-expand-lg"><div class="container-fluid"><a href="/" class="logo"><img src="/gold-cross.png" alt="Golden Cross"></a> <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button> <div class="collapse navbar-collapse" id="navbarNavAltMarkup"><div class="navbar-nav"><a class="nav-link active svelte-111nydz" href="/about">Our Chapter</a> <a class="nav-link active svelte-111nydz" href="/recruitment">Recruitment</a> <a class="nav-link active svelte-111nydz" href="/history">History of Gamma Mu</a> <a class="nav-link active svelte-111nydz" href="/philanthropy">Philanthropy</a></div></div></div></nav> </body>`;
});
const Contact_svelte_svelte_type_style_lang = "";
const css = {
  code: 'body.svelte-ii016n{color:white;background:black;padding:1rem}h1.svelte-ii016n{font-family:"Cormorant Garamond", serif;border-bottom:1px solid #FFAF38}p.svelte-ii016n{font-family:"Inter", sans-serif}img.svelte-ii016n{width:30%}.address.svelte-ii016n{font-size:1.2rem}',
  map: null
};
const Contact = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<body class="svelte-ii016n" data-svelte-h="svelte-1vkh80a"><h1 class="svelte-ii016n">Contact Us</h1> <p class="svelte-ii016n">Phone: +1-785-856-1401</p> <p class="svelte-ii016n">Email: kansasatopres@gmail.com</p> <p class="svelte-ii016n">Recruitment Interest Form: <a href="https://docs.google.com/forms/d/e/1FAIpQLSf0MlWE9JzLRiTIXq1nxcGpsn68opT48nqCQNJUW4RklEdeDQ/viewform?usp=sf_link">Click Here</a></p> <p class="address svelte-ii016n">1537 Tennessee Street, Lawrence, Kansas 66046</p> <img alt="House Location" src="/location.png" class="svelte-ii016n"> </body>`;
});
export {
  Contact as C,
  Navbar as N
};
