import { c as create_ssr_component, v as validate_component } from "../../../chunks/ssr.js";
import { N as Navbar, C as Contact } from "../../../chunks/Contact.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: '.title.svelte-rw3iih{margin-top:1%;margin-bottom:1%;font-size:3rem}body.svelte-rw3iih{color:black;text-align:center}h1.svelte-rw3iih{font-family:"Cormorant Garamond", serif;font-size:2rem}p.svelte-rw3iih{font-family:"Inter", sans-serif}.row.svelte-rw3iih{margin:3%}footer.svelte-rw3iih{text-align:left}img.svelte-rw3iih{width:60rem;margin-right:10%;margin-top:5%}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<body class="svelte-rw3iih">${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})} <div class="container text-center" data-svelte-h="svelte-of8rta"><div class="row svelte-rw3iih"><div class="col"></div> <img src="/ku.png" alt="University of Kansas" class="svelte-rw3iih"> <h1 class="title svelte-rw3iih">History of Gamma Mu</h1> <div class="col-wide"><div class="card"><div class="card-body"><h1 class="card-title svelte-rw3iih">Beginnings of ATO</h1> <p class="svelte-rw3iih">&quot;Alpha Tau Omega began as an idea in the mind of a young Civil War veteran who wanted peace and reconciliation. His name was Otis Allan Glazebrook. His people were defeated, many of their cities burned, much of their countryside ravaged. But Glazebrook, who had helped bury the dead of both sides, believed in a better future. He saw the bitterness and hatred that followed the silencing of the guns and knew that a true peace would come not from force of law, but rather from with the hearts of men who were willing to work to rekindle a spirit of brotherly love.&quot;</p></div></div></div> <div class="col"></div></div> <div class="row svelte-rw3iih"><div class="col"></div> <div class="col-wide"><div class="card"><div class="card-body"><h1 class="card-title svelte-rw3iih">Our Chapter</h1> <p class="svelte-rw3iih">Gamma Mu was founded in 1901 with slow but sustainable growth in the early years. In the 1940&#39;s we built our chapter house at 1537 Tennessee Street, which is the same house we live in today. By the 1980&#39;s we had grown into one of the largest and strongest brotherhoods on campus. Even after over 100 years, we still maintain the original values we were founded with. Values of fellowship, scholarship, and strong character.</p></div></div></div> <div class="col"></div></div></div></body> <footer class="svelte-rw3iih">${validate_component(Contact, "Contact").$$render($$result, {}, {}, {})} </footer>`;
});
export {
  Page as default
};
