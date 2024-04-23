import { c as create_ssr_component, v as validate_component } from "../../../chunks/ssr.js";
import { N as Navbar, C as Contact } from "../../../chunks/Contact.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: 'body.svelte-1n6g47x{color:black;text-align:center}h1.svelte-1n6g47x{font-family:"Cormorant Garamond", serif}p.svelte-1n6g47x{font-family:"Inter", sans-serif}.row.svelte-1n6g47x{margin:5%}footer.svelte-1n6g47x{text-align:left}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<body class="svelte-1n6g47x">${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})} <h1 class="svelte-1n6g47x" data-svelte-h="svelte-eimev4">History of Gamma Mu</h1> <div class="row svelte-1n6g47x" data-svelte-h="svelte-117ro9z"><div class="col"></div> <div class="col-wide"><div class="card"><div class="card-body"><h1 class="card-title svelte-1n6g47x">Beginnings of ATO</h1> <p class="svelte-1n6g47x">&quot;Alpha Tau Omega began as an idea in the mind of a young Civil War veteran who wanted peace and reconciliation. His name was Otis Allan Glazebrook. His people were defeated, many of their cities burned, much of their countryside ravaged. But Glazebrook, who had helped bury the dead of both sides, believed in a better future. He saw the bitterness and hatred that followed the silencing of the guns and knew that a true peace would come not from force of law, but rather from with the hearts of men who were willing to work to rekindle a spirit of brotherly love.&quot;</p></div></div></div> <div class="col"></div></div> <div class="row svelte-1n6g47x" data-svelte-h="svelte-1635p9a"><div class="col"></div> <div class="col-wide"><div class="card"><div class="card-body"><h1 class="card-title svelte-1n6g47x">Our Chapter</h1> <p class="svelte-1n6g47x">Gamma Mu was founded in 1901 with slow but sustainable growth in the early years. In the 1940&#39;s we built our chapter house at 1537 Tennessee Street, which is the same house we live in today. By the 1980&#39;s we had grown into one of the largest and strongest brotherhoods on campus. Even after over 100 years, we still maintain the original values we were founded with. Values of fellowship, scholarship, and strong character.</p></div></div></div> <div class="col"></div></div></body> <footer class="svelte-1n6g47x">${validate_component(Contact, "Contact").$$render($$result, {}, {}, {})} </footer>`;
});
export {
  Page as default
};
