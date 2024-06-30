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
  code: 'body.svelte-1wka2tz{background:rgb(255,255,255);overflow-x:hidden}hr.svelte-1wka2tz{margin:5% 0;border-top:2px solid #FFAF38}.page.svelte-1wka2tz{height:100rem;width:100%}#main-text.svelte-1wka2tz{position:absolute;top:20%;left:10%;align-items:center;text-align:center}#title.svelte-1wka2tz{font-size:10rem;color:white}#subtitle.svelte-1wka2tz{font-family:"Cormorant Garamond", serif;font-size:2rem;color:white}#cover-image.svelte-1wka2tz{width:95rem}#page-2.svelte-1wka2tz{background:rgb(255,255,255);background-image:url("../src/lib/asfalt.png");position:relative;margin-top:-56rem;z-index:2;text-align:center;margin-bottom:5%}#quote.svelte-1wka2tz{font-family:"Cormorant Garamond", serif;color:black;font-size:4rem}#description.svelte-1wka2tz{color:black;font-family:"Inter", sans-serif;font-size:1.2rem}.email.svelte-1wka2tz{margin-top:10%;margin-left:10%;text-align:left}.coa.svelte-1wka2tz{margin-left:30%}footer.svelte-1wka2tz{text-align:left}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const ssr = false;
  if ($$props.ssr === void 0 && $$bindings.ssr && ssr !== void 0)
    $$bindings.ssr(ssr);
  $$result.css.add(css);
  return `<body class="svelte-1wka2tz">${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})} <div id="page-1" class="page svelte-1wka2tz" data-svelte-h="svelte-met9td"><img src="/house.jpg" alt="The House" id="cover-image" class="svelte-1wka2tz"> <div id="main-text" class="svelte-1wka2tz"><h1 id="title" class="svelte-1wka2tz">ATΩ</h1> <h2 id="subtitle" class="svelte-1wka2tz">Gamma Mu / University of Kansas</h2></div></div> <div class="page svelte-1wka2tz" id="page-2" data-svelte-h="svelte-15z06q3"><hr class="svelte-1wka2tz"> <div class="container text-center big-text"><div class="row"><div class="col quote-side"></div> <div class="col"><h1 id="quote" class="svelte-1wka2tz">&quot;To Bind Men Together...&quot;</h1> <p id="description" class="svelte-1wka2tz">Alpha Tau Omega at The University of Kansas is a brotherhood lasting over a century, allowing people from all backgrounds to improve as both leaders and men.</p></div> <div class="col quote-side"></div></div></div> <hr class="svelte-1wka2tz"> <div class="row email svelte-1wka2tz"><div class="col"><h1>Email Us</h1> <label class="form-label" for="name">Name</label> <input class="form-control" id="name" type="text" placeholder="Name"> <label class="form-label" for="emailAddress">Email Address</label> <input class="form-control" id="emailAddress" type="email" placeholder="Email Address"> <label class="form-label" for="message">Message</label> <textarea class="form-control" id="message" type="text" placeholder="Message" style="height: 10rem;"></textarea> <br> <button class="btn btn-primary btn-lg" type="submit">Submit</button></div> <div class="col"><img src="/Alpha_Tau_Omega_Coat_of_Arms.png" class="coa svelte-1wka2tz" alt=""></div></div></div></body> <footer class="svelte-1wka2tz">${validate_component(Contact, "Contact").$$render($$result, {}, {}, {})} </footer>`;
});
export {
  Page as default
};
