import { c as create_ssr_component, a as subscribe, v as validate_component, b as each, d as add_attribute, e as escape } from "../../chunks/ssr.js";
import { a as app, c as collectionStore } from "../../chunks/firestore.js";
import "firebase/auth";
import "firebase/storage";
import "firebase/analytics";
import "firebase/database";
import { getFirestore } from "firebase/firestore";
import { N as Navbar, C as Contact } from "../../chunks/Contact.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: 'body.svelte-4pk8w8{background:rgb(255,255,255);overflow-x:hidden}hr.svelte-4pk8w8{margin:5% 0;border-top:2px solid #FFAF38}.page.svelte-4pk8w8{height:100rem;width:100%}#main-text.svelte-4pk8w8{position:absolute;align-items:center;text-align:center;top:35%;left:40%}#subtitle.svelte-4pk8w8{margin-left:20%;font-family:"Cormorant Garamond", serif;font-size:2rem;color:white}#logo.svelte-4pk8w8{width:120%}#cover-image.svelte-4pk8w8{width:95rem}#page-2.svelte-4pk8w8{background:rgb(255,255,255);background-image:url("../src/lib/asfalt.png");position:relative;margin-top:-56rem;z-index:2;text-align:center}#quote.svelte-4pk8w8{font-family:"Cormorant Garamond", serif;color:black;font-size:4rem}#description.svelte-4pk8w8{color:black;font-family:"Inter", sans-serif;font-size:1.2rem}.card.svelte-4pk8w8{border:none}.card.svelte-4pk8w8:hover{border-bottom:2px solid #FFAF38;cursor:pointer}.card-title.svelte-4pk8w8{font-family:"Cormorant Garamond", serif;font-size:1.7rem}.card-text.svelte-4pk8w8{font-family:"Inter", sans-serif;font-size:1rem}#coat-of-arms.svelte-4pk8w8{margin-top:10%}footer.svelte-4pk8w8{text-align:left}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $about, $$unsubscribe_about;
  const ssr = false;
  const firestore = getFirestore(app);
  const about = collectionStore(firestore, "about");
  $$unsubscribe_about = subscribe(about, (value) => $about = value);
  if ($$props.ssr === void 0 && $$bindings.ssr && ssr !== void 0)
    $$bindings.ssr(ssr);
  $$result.css.add(css);
  $$unsubscribe_about();
  return `<body class="svelte-4pk8w8">${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})} <div id="page-1" class="page svelte-4pk8w8" data-svelte-h="svelte-nyn2h0"><img src="../src/lib/house.jpg" alt="The House" id="cover-image" class="svelte-4pk8w8"> <div id="main-text" class="svelte-4pk8w8"><img src="../src/lib/alpha-tau-omega-logo.png" alt="logo" id="logo" class="svelte-4pk8w8"> <h2 id="subtitle" class="svelte-4pk8w8">Gamma Mu</h2></div></div> <div class="page svelte-4pk8w8" id="page-2"><hr class="svelte-4pk8w8"> <div class="container text-center" data-svelte-h="svelte-1n7j1sv"><div class="row"><div class="col"></div> <div class="col"><h1 id="quote" class="svelte-4pk8w8">&quot;To Bind Men Together...&quot;</h1> <p id="description" class="svelte-4pk8w8">Alpha Tau Omega at The University of Kansas is a brotherhood lasting over a century, allowing people from all backgrounds to improve as both leaders and men.</p></div> <div class="col"></div></div></div> <hr class="svelte-4pk8w8"> <div class="card-group">${each($about, (card) => {
    return `<div class="card svelte-4pk8w8"><img${add_attribute("src", card.url, 0)} class="card-img-top"${add_attribute("alt", card.name, 0)}> <div class="card-body"><h5 class="card-title svelte-4pk8w8">${escape(card.name)}</h5> <p class="card-text svelte-4pk8w8">${escape(card.desc)}</p></div> </div>`;
  })}</div> <img alt="Coat of Arms" id="coat-of-arms" src="../src/lib/Alpha_Tau_Omega_Coat_of_Arms.png" class="svelte-4pk8w8"></div></body> <footer class="svelte-4pk8w8">${validate_component(Contact, "Contact").$$render($$result, {}, {}, {})} </footer>`;
});
export {
  Page as default
};
