import { c as create_ssr_component } from "./ssr.js";
const Navbar_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: 'body.svelte-1gnzo0w{background:rgb(255,255,255);position:sticky;overflow:hidden}.nav-link.svelte-1gnzo0w{font-family:"Cormorant Garamond", serif;color:black;font-size:1.5rem}.nav-link.svelte-1gnzo0w:hover{color:#FFAF38}',
  map: null
};
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<body class="svelte-1gnzo0w" data-svelte-h="svelte-qnxs46"><nav class="navbar navbar-expand-lg"><div class="container-fluid"><a href="/"><img src="/gold-cross.png" alt="Golden Cross"></a> <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button> <div class="collapse navbar-collapse" id="navbarNavAltMarkup"><div class="navbar-nav"><a class="nav-link active svelte-1gnzo0w" href="/about">About</a> <a class="nav-link active svelte-1gnzo0w" href="/recruitment">Recruitment</a> <a class="nav-link active svelte-1gnzo0w" href="#">Alumni</a></div></div></div></nav> </body>`;
});
const Contact_svelte_svelte_type_style_lang = "";
const css = {
  code: 'body.svelte-aldwm6{color:white;background:black;padding:1rem}h1.svelte-aldwm6{font-family:"Cormorant Garamond", serif;border-bottom:1px solid #FFAF38}p.svelte-aldwm6{font-family:"Inter", sans-serif}',
  map: null
};
const Contact = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<body class="svelte-aldwm6" data-svelte-h="svelte-18wajwh"><h1 class="svelte-aldwm6">Contact Us</h1> <p class="svelte-aldwm6">+1-785-856-1401</p> <p class="svelte-aldwm6">1537 Tennessee Street, Lawrence, Kansas 66046</p> <p class="svelte-aldwm6">kansasatopres@gmail.com</p> </body>`;
});
export {
  Contact as C,
  Navbar as N
};
