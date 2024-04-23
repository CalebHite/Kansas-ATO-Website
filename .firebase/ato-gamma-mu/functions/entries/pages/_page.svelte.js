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
  code: 'body.svelte-uodd4o{background:rgb(255,255,255);overflow-x:hidden}hr.svelte-uodd4o{margin:5% 0;border-top:2px solid #FFAF38}a.svelte-uodd4o{color:black;text-decoration:underline 1px black}a.svelte-uodd4o:hover{color:#FFAF38}.page.svelte-uodd4o{height:100rem;width:100%}#main-text.svelte-uodd4o{position:absolute;align-items:center;text-align:center;top:35%;left:40%}#subtitle.svelte-uodd4o{margin-left:20%;font-family:"Cormorant Garamond", serif;font-size:2rem;color:white}#logo.svelte-uodd4o{width:120%}#cover-image.svelte-uodd4o{width:95rem}#page-2.svelte-uodd4o{background:rgb(255,255,255);background-image:url("../src/lib/asfalt.png");position:relative;margin-top:-56rem;z-index:2;text-align:center}#quote.svelte-uodd4o{font-family:"Cormorant Garamond", serif;color:black;font-size:4rem}#description.svelte-uodd4o{color:black;font-family:"Inter", sans-serif;font-size:1.2rem}.card.svelte-uodd4o{border:none}.card-title.svelte-uodd4o{font-family:"Cormorant Garamond", serif;font-size:1.7rem}.card-text.svelte-uodd4o{font-family:"Inter", sans-serif;font-size:1rem}#coat-of-arms.svelte-uodd4o{margin-top:10%}footer.svelte-uodd4o{text-align:left}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const ssr = false;
  if ($$props.ssr === void 0 && $$bindings.ssr && ssr !== void 0)
    $$bindings.ssr(ssr);
  $$result.css.add(css);
  return `<body class="svelte-uodd4o">${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})} <div id="page-1" class="page svelte-uodd4o" data-svelte-h="svelte-1uqoxg2"><img src="/house.jpg" alt="The House" id="cover-image" class="svelte-uodd4o"> <div id="main-text" class="svelte-uodd4o"><img src="/alpha-tau-omega-logo.png" alt="logo" id="logo" class="svelte-uodd4o"> <h2 id="subtitle" class="svelte-uodd4o">Gamma Mu</h2></div></div> <div class="page svelte-uodd4o" id="page-2" data-svelte-h="svelte-7faxu7"><hr class="svelte-uodd4o"> <div class="container text-center"><div class="row"><div class="col"></div> <div class="col"><h1 id="quote" class="svelte-uodd4o">&quot;To Bind Men Together...&quot;</h1> <p id="description" class="svelte-uodd4o">Alpha Tau Omega at The University of Kansas is a brotherhood lasting over a century, allowing people from all backgrounds to improve as both leaders and men.</p></div> <div class="col"></div></div></div> <hr class="svelte-uodd4o"> <div class="card-group"><div class="card svelte-uodd4o"><img src="https://i.imgur.com/BU0MtJy.png" class="card-img-top" alt="Philanthropy and Community Service"> <div class="card-body"><h5 class="card-title svelte-uodd4o"><a href="#" class="svelte-uodd4o">Philanthropy and Community Service</a></h5> <p class="card-text svelte-uodd4o">Taus give back to their community through community service and philanthropic donations.</p></div></div> <div class="card svelte-uodd4o"><img src="https://i.imgur.com/1U6YWcE.png" class="card-img-top" alt="Recruitment"> <div class="card-body"><h5 class="card-title svelte-uodd4o"><a href="/recruitment" class="svelte-uodd4o">Recruitment Information</a></h5> <p class="card-text svelte-uodd4o">Interested in greek life at KU? Get in contact with our recruitment chair and learn more about ATO.</p></div></div> <div class="card svelte-uodd4o"><img src="https://i.imgur.com/ZtME4Om.jpeg" class="card-img-top" alt="Philanthropy and Community Service"> <div class="card-body"><h5 class="card-title svelte-uodd4o"><a href="/history" class="svelte-uodd4o">History of Gamma Mu</a></h5> <p class="card-text svelte-uodd4o">ATO at The University of Kansas holds a rich history of friendship, brotherhood, and campus leadership.</p></div></div></div> <img alt="Coat of Arms" id="coat-of-arms" src="/Alpha_Tau_Omega_Coat_of_Arms.png" class="svelte-uodd4o"></div></body> <footer class="svelte-uodd4o">${validate_component(Contact, "Contact").$$render($$result, {}, {}, {})} </footer>`;
});
export {
  Page as default
};
