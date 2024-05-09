import { c as create_ssr_component } from "./ssr.js";
const Navbar_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: 'body.svelte-5ib51l{overflow:hidden}nav.svelte-5ib51l{background:rgb(255,255,255)}.logo.svelte-5ib51l:hover{transform:rotate(90deg);transition:all 0.3s ease-in-out 0s}.nav-link.svelte-5ib51l{font-family:"Cormorant Garamond", serif;color:black;font-size:1.5rem;border-left:2px solid #FFAF38}.nav-link.svelte-5ib51l:hover{color:white;background:#FFAF38}.icon.svelte-5ib51l{border:none;font-size:2rem;padding-left:3px}.icon.svelte-5ib51l:hover{color:#FFAF38;transition:all 0.2s ease-in-out 0s;background:none}',
  map: null
};
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<body class="svelte-5ib51l" data-svelte-h="svelte-w6dukv"><nav class="navbar fixed-top navbar-expand-lg svelte-5ib51l"><div class="container-fluid"><a href="/" class="logo svelte-5ib51l"><img src="/gold-cross.png" alt="Golden Cross"></a> <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button> <div class="collapse navbar-collapse" id="navbarText"><div class="navbar-nav me-auto mb-2 mb-lg-0"><a class="nav-link active svelte-5ib51l" href="/about">Our Chapter</a> <a class="nav-link active svelte-5ib51l" href="/recruitment">Recruitment</a> <a class="nav-link active svelte-5ib51l" href="/history">History of Gamma Mu</a> <a class="nav-link active svelte-5ib51l" href="/philanthropy">Philanthropy</a></div> <span class="navbar-text"><a href="https://www.instagram.com/kansasato/" class="icon svelte-5ib51l"><i class="fa-brands fa-instagram"></i></a> <a href="mailto:kansasatopres@gmail.com" class="icon svelte-5ib51l"><i class="fa-regular fa-envelope"></i></a> <a href="https://www.facebook.com/KansasATO/" class="icon svelte-5ib51l"><i class="fa-brands fa-facebook"></i></a></span></div></div></nav> </body>`;
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
