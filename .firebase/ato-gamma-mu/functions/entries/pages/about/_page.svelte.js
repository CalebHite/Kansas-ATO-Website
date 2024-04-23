import { c as create_ssr_component, a as subscribe, v as validate_component, b as each, d as add_attribute, e as escape } from "../../../chunks/ssr.js";
import { a as app, c as collectionStore } from "../../../chunks/firestore.js";
import "firebase/auth";
import "firebase/storage";
import "firebase/analytics";
import "firebase/database";
import { getFirestore } from "firebase/firestore";
import { N as Navbar, C as Contact } from "../../../chunks/Contact.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: 'body.svelte-hrj0st{overflow-x:hidden;text-align:center;align-items:center}h1.svelte-hrj0st{margin:5% 0%;font-family:"Cormorant Garamond", serif;font-size:3rem;padding-bottom:.5rem;border-bottom:1px solid #FFAF38}p.svelte-hrj0st{font-family:"Inter", sans-serif}.card.svelte-hrj0st{margin:1%}.card-title.svelte-hrj0st{font-family:"Cormorant Garamond", serif;font-size:2rem}.card-text.svelte-hrj0st{font-family:"Inter", sans-serif}footer.svelte-hrj0st{text-align:left}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $exec, $$unsubscribe_exec;
  const ssr = false;
  const firestore = getFirestore(app);
  const exec = collectionStore(firestore, "exec");
  $$unsubscribe_exec = subscribe(exec, (value) => $exec = value);
  if ($$props.ssr === void 0 && $$bindings.ssr && ssr !== void 0)
    $$bindings.ssr(ssr);
  $$result.css.add(css);
  $$unsubscribe_exec();
  return `<body class="svelte-hrj0st">${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})} <img src="src\\lib\\Alpha_Tau_Omega_Coat_of_Arms.png" alt="coat of arms"> <div class="row" data-svelte-h="svelte-nl3ylj"><div class="col"></div> <div class="col"><h1 class="svelte-hrj0st">&quot;America&#39;s Leadership Development Fraternity&quot;</h1> <p class="svelte-hrj0st">In 1865 three men set out to form a new kind of fraternity, built upon Judeo-Christian roots, with a mission to bind together a country torn apart by the Civil War. Each chapter of ATO has a mission to build a brotherhood of leaders from all backgrounds, bound together by shared virtues and responsibilities.</p></div> <div class="col"></div></div> <h1 class="svelte-hrj0st" data-svelte-h="svelte-nig8h0">Executive Board</h1> <div class="row row-cols-auto justify-content-md-center">${each($exec, (member) => {
    return `<div class="col"><div class="card svelte-hrj0st" style="width: 18rem;"><img${add_attribute("src", member.pic, 0)} class="card-img-top"${add_attribute("alt", member.name, 0)}> <div class="card-body"><h5 class="card-title svelte-hrj0st">${escape(member.name)}</h5> <p class="card-text svelte-hrj0st">${escape(member.position)}</p> </div></div> </div>`;
  })}</div> <div class="row" data-svelte-h="svelte-kc6zxt"><div class="col"></div> <div class="col"><h1 class="svelte-hrj0st">Awards</h1> <p class="svelte-hrj0st"></p></div> <div class="col"></div></div></body> <footer class="svelte-hrj0st">${validate_component(Contact, "Contact").$$render($$result, {}, {}, {})} </footer>`;
});
export {
  Page as default
};
