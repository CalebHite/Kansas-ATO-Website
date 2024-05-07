import { c as create_ssr_component, v as validate_component } from "../../chunks/ssr.js";
import "../../chunks/firebase.js";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
import "firebase/analytics";
import "firebase/database";
import { N as Navbar, C as Contact } from "../../chunks/Contact.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: 'body.svelte-y38u50{background:rgb(255,255,255);overflow-x:hidden}hr.svelte-y38u50{margin:5% 0;border-top:2px solid #FFAF38}.card.svelte-y38u50:hover{border-bottom:2px solid #FFAF38;cursor:pointer}.page.svelte-y38u50{height:100rem;width:100%}#main-text.svelte-y38u50{position:absolute;align-items:center;text-align:center;top:35%;left:40%}#subtitle.svelte-y38u50{margin-left:20%;font-family:"Cormorant Garamond", serif;font-size:2rem;color:white}#logo.svelte-y38u50{width:120%}#cover-image.svelte-y38u50{width:95rem}#page-2.svelte-y38u50{background:rgb(255,255,255);background-image:url("../src/lib/asfalt.png");position:relative;margin-top:-56rem;z-index:2;text-align:center}#quote.svelte-y38u50{font-family:"Cormorant Garamond", serif;color:black;font-size:4rem}#description.svelte-y38u50{color:black;font-family:"Inter", sans-serif;font-size:1.2rem}.card.svelte-y38u50{border:none}.card-title.svelte-y38u50{font-family:"Cormorant Garamond", serif;font-size:1.7rem}.card-text.svelte-y38u50{font-family:"Inter", sans-serif;font-size:1rem}#coat-of-arms.svelte-y38u50{margin-top:10%}footer.svelte-y38u50{text-align:left}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const ssr = false;
  if ($$props.ssr === void 0 && $$bindings.ssr && ssr !== void 0)
    $$bindings.ssr(ssr);
  $$result.css.add(css);
  return `<body class="svelte-y38u50">${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})} <div id="page-1" class="page svelte-y38u50" data-svelte-h="svelte-1uqoxg2"><img src="/house.jpg" alt="The House" id="cover-image" class="svelte-y38u50"> <div id="main-text" class="svelte-y38u50"><img src="/alpha-tau-omega-logo.png" alt="logo" id="logo" class="svelte-y38u50"> <h2 id="subtitle" class="svelte-y38u50">Gamma Mu</h2></div></div> <div class="page svelte-y38u50" id="page-2"><hr class="svelte-y38u50"> <div class="container text-center" data-svelte-h="svelte-1n7j1sv"><div class="row"><div class="col"></div> <div class="col"><h1 id="quote" class="svelte-y38u50">&quot;To Bind Men Together...&quot;</h1> <p id="description" class="svelte-y38u50">Alpha Tau Omega at The University of Kansas is a brotherhood lasting over a century, allowing people from all backgrounds to improve as both leaders and men.</p></div> <div class="col"></div></div></div> <hr class="svelte-y38u50"> <div class="card-group"><div class="card svelte-y38u50" data-svelte-h="svelte-duiq1u"><img src="https://i.imgur.com/BU0MtJy.png" class="card-img-top" alt="Philanthropy and Community Service"> <div class="card-body"><h5 class="card-title svelte-y38u50">Philanthropy and Community Service</h5> <p class="card-text svelte-y38u50">Taus give back to their community through community service and philanthropic donations.</p></div></div> <div class="card svelte-y38u50" data-svelte-h="svelte-19j3trx"><img src="https://i.imgur.com/1U6YWcE.png" class="card-img-top" alt="Recruitment"> <div class="card-body"><h5 class="card-title svelte-y38u50">Recruitment Information</h5> <p class="card-text svelte-y38u50">Interested in greek life at KU? Get in contact with our recruitment chair and learn more about ATO.</p></div></div> <div class="card svelte-y38u50" data-svelte-h="svelte-dpf33m"><img src="https://i.imgur.com/ZtME4Om.jpeg" class="card-img-top" alt="History"> <div class="card-body"><h5 class="card-title svelte-y38u50">History of Gamma Mu</h5> <p class="card-text svelte-y38u50">ATO at The University of Kansas holds a rich history of friendship, brotherhood, and campus leadership.</p></div></div></div> <img alt="Coat of Arms" id="coat-of-arms" src="/Alpha_Tau_Omega_Coat_of_Arms.png" class="svelte-y38u50"></div></body> <footer class="svelte-y38u50">${validate_component(Contact, "Contact").$$render($$result, {}, {}, {})} </footer>`;
});
export {
  Page as default
};
