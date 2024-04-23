import { c as create_ssr_component, v as validate_component } from "../../../chunks/ssr.js";
import { N as Navbar, C as Contact } from "../../../chunks/Contact.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "body.svelte-1urtix2{color:black;text-align:center}footer.svelte-1urtix2{text-align:left}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<body class="svelte-1urtix2">${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})}</body> <footer class="svelte-1urtix2">${validate_component(Contact, "Contact").$$render($$result, {}, {}, {})} </footer>`;
});
export {
  Page as default
};
