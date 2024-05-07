import { c as create_ssr_component, v as validate_component } from "../../../chunks/ssr.js";
import { N as Navbar, C as Contact } from "../../../chunks/Contact.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: 'body.svelte-1ru6o5o{color:black;text-align:center;overflow-x:hidden}h1.svelte-1ru6o5o{font-family:"Cormorant Garamond", serif}p.svelte-1ru6o5o{font-family:"Inter", sans-serif;margin:2%}footer.svelte-1ru6o5o{text-align:left}img.svelte-1ru6o5o{margin-top:2%;margin-bottom:2%}.row.svelte-1ru6o5o{margin-bottom:10%}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<body class="svelte-1ru6o5o">${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})} <div class="row svelte-1ru6o5o" data-svelte-h="svelte-3q9j4p"><div class="col"></div> <div class="col"><img src="/rcr.png" class="svelte-1ru6o5o"> <h1 id="title" class="svelte-1ru6o5o">Philanthropy</h1> <p class="svelte-1ru6o5o">Alpha Tau Omega at the University of Kansas has a strong history of philanthropy. This past year we raised over $8000 in donations to various charities. We participated in our community through work with marathons, special needs groups, and food banks.</p> <p class="svelte-1ru6o5o">ATO won audience choice at Rock Chalk Revue, a theater competition raising money for the Ballard Center food bank. ATO raised roughly $4000 for the charity through this competition.</p> <p class="svelte-1ru6o5o">We placed second in KU IFC&#39;s Chapters for Charity competition, in which we donated over $400 worth of food, hygiene supplies, and clothing for families in need.</p></div> <div class="col"></div></div></body> <footer class="svelte-1ru6o5o">${validate_component(Contact, "Contact").$$render($$result, {}, {}, {})} </footer>`;
});
export {
  Page as default
};
