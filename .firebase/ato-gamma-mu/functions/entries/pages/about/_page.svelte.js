import { c as create_ssr_component, v as validate_component, d as each, f as add_attribute, e as escape } from "../../../chunks/ssr.js";
import "../../../chunks/firebase.js";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
import "firebase/analytics";
import "firebase/database";
import { N as Navbar, C as Contact } from "../../../chunks/Contact.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: 'body.svelte-x5youv{overflow-x:hidden;text-align:center;align-items:center}h1.svelte-x5youv{margin:5% 0%;font-family:"Cormorant Garamond", serif;font-size:3rem;padding-bottom:.5rem;border-bottom:1px solid #FFAF38}p.svelte-x5youv{font-family:"Inter", sans-serif}.card.svelte-x5youv{margin:1%}.card-title.svelte-x5youv{font-family:"Cormorant Garamond", serif;font-size:2rem}.card-text.svelte-x5youv{font-family:"Inter", sans-serif}#exec.svelte-x5youv{margin-left:10%;margin-bottom:1%}footer.svelte-x5youv{text-align:left}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const ssr = false;
  const exec = [
    {
      name: "Robert Boersma",
      pic: "https://i.imgur.com/wRy9jYs.png",
      position: "Vice President"
    },
    {
      name: "Caiden Parsons",
      pic: "https://i.imgur.com/3J53eGp.png",
      position: "Health and Safety"
    },
    {
      name: "Lucas Mercer",
      pic: "https://i.imgur.com/mfplLoH.png",
      position: "Membership Education Chair"
    },
    {
      name: "Lucas Stanton",
      pic: "https://i.imgur.com/DjnqH9h.png",
      position: "Treasurer"
    },
    {
      name: "Walker Haber",
      pic: "https://i.imgur.com/5jKDQi1.png",
      position: "President"
    },
    {
      name: "David Streiler",
      pic: "https://i.imgur.com/IyoLUEP.png",
      position: "Secretary"
    },
    {
      name: "Kaler Lidgett",
      pic: "https://i.imgur.com/3vWR1k8.png",
      position: "Recruitment Chair"
    },
    {
      name: "Matthew Pino",
      pic: "https://i.imgur.com/qTYviFq.png",
      position: "Chaplain"
    },
    {
      name: "John Hannigan",
      pic: "https://i.imgur.com/TXTUcyO.png",
      position: "Historian"
    }
  ];
  if ($$props.ssr === void 0 && $$bindings.ssr && ssr !== void 0)
    $$bindings.ssr(ssr);
  $$result.css.add(css);
  return `<body class="svelte-x5youv">${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})} <img src="/Alpha_Tau_Omega_Coat_of_Arms.png" alt="coat of arms"> <div class="row" data-svelte-h="svelte-nl3ylj"><div class="col"></div> <div class="col"><h1 class="svelte-x5youv">&quot;America&#39;s Leadership Development Fraternity&quot;</h1> <p class="svelte-x5youv">In 1865 three men set out to form a new kind of fraternity, built upon Judeo-Christian roots, with a mission to bind together a country torn apart by the Civil War. Each chapter of ATO has a mission to build a brotherhood of leaders from all backgrounds, bound together by shared virtues and responsibilities.</p></div> <div class="col"></div></div> <h1 class="svelte-x5youv" data-svelte-h="svelte-nig8h0">Executive Board</h1> <div id="exec" class="row row-cols-3 justify-content-md-center svelte-x5youv">${each(exec, (member) => {
    return `<div class="col"><div class="card svelte-x5youv" style="width: 18rem;"><img${add_attribute("src", member.pic, 0)} class="card-img-top"${add_attribute("alt", member.name, 0)}> <div class="card-body"><h5 class="card-title svelte-x5youv">${escape(member.name)}</h5> <p class="card-text svelte-x5youv">${escape(member.position)}</p> </div></div> </div>`;
  })}</div> </body> <footer class="svelte-x5youv">${validate_component(Contact, "Contact").$$render($$result, {}, {}, {})} </footer>`;
});
export {
  Page as default
};
