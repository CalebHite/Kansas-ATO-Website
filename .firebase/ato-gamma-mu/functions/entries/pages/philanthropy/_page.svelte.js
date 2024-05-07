import { c as create_ssr_component, v as validate_component } from "../../../chunks/ssr.js";
import { N as Navbar, C as Contact } from "../../../chunks/Contact.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: 'body.svelte-1s60qv{color:black;text-align:center}h1.svelte-1s60qv{font-family:"Cormorant Garamond", serif}p.svelte-1s60qv{font-family:"Inter", sans-serif;margin:2%}footer.svelte-1s60qv{text-align:left}img.svelte-1s60qv{margin-bottom:2%}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<body class="svelte-1s60qv">${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})} <h1 id="title" class="svelte-1s60qv" data-svelte-h="svelte-cq5rm2">Philanthropy</h1> <div class="row" data-svelte-h="svelte-zncdq9"><div class="col"></div> <div class="col"><img src="/rcr.png" class="svelte-1s60qv"> <p class="svelte-1s60qv">Alpha Tau Omega at the University of Kansas has a strong history of philanthropy. This past year we raised over $8000 in donations to various charities. We participated in our community through work with marathons, special needs groups, and food banks.</p></div> <div class="col"></div></div> <p class="svelte-1s60qv" data-svelte-h="svelte-mb5tcm">ATO won audience choice at Rock Chalk Revue, a theater competition raising money for the Ballard Center food bank. ATO raised roughly $4000 for the charity through this competition.</p> <p class="svelte-1s60qv" data-svelte-h="svelte-1fzrx55">We placed second in KU IFC&#39;s Chapters for Charity competition, in which we donated over $400 worth of food, hygiene supplies, and clothing for families in need.</p></body> <footer class="svelte-1s60qv">${validate_component(Contact, "Contact").$$render($$result, {}, {}, {})} </footer>`;
});
export {
  Page as default
};
