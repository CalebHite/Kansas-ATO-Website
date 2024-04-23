import { c as create_ssr_component, v as validate_component } from "../../../chunks/ssr.js";
import { N as Navbar, C as Contact } from "../../../chunks/Contact.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: 'body.svelte-13d0vih{text-align:center;overflow-x:hidden}#bg.svelte-13d0vih{background-image:url("../../lib/recruitment.jpg")}#title.svelte-13d0vih{color:white;text-shadow:1.5px 1.5px black}h1.svelte-13d0vih{font-family:"Cormorant Garamond", serif}h2.svelte-13d0vih{font-family:"Inter", sans-serif;font-size:1.5rem}P.svelte-13d0vih{font-family:"Inter", sans-serif}.row.svelte-13d0vih{padding-bottom:10%;margin:1%}.accordion.svelte-13d0vih{text-align:left;background:white}.accordion-title.svelte-13d0vih{margin-left:1%}footer.svelte-13d0vih{text-align:left}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<body class="svelte-13d0vih">${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})} <div id="bg" class="svelte-13d0vih" data-svelte-h="svelte-1l0whmr"><h1 id="title" class="svelte-13d0vih">Recruitment Information</h1> <div class="row svelte-13d0vih"><div class="col"><div class="card"><div class="card-body"><h5 class="card-title">Recruitment Chair</h5> <p class="card-text svelte-13d0vih">Kaler Lidgett</p> <p class="card-text svelte-13d0vih">913-223-4412</p> <p class="card-text svelte-13d0vih">kansasatorecruit@gmail.com</p> <a href="#" class="btn btn-primary">Interest Form</a></div></div></div> <div class="col"><div class="card"><div class="card-body"><h5 class="card-title">Rush Chairmen</h5> <p class="card-text svelte-13d0vih">Caden Clark 913-568-6583</p> <p class="card-text svelte-13d0vih">Ryan Fohlmeister 913-703-9298</p> <p class="card-text svelte-13d0vih">Kyle Dime 972-898-3117</p></div></div></div> <div class="col"><div class="card"><div class="card-body"><h5 class="card-title">Membership Requirements</h5> <p class="card-text svelte-13d0vih">Cumulative 2.8 GPA</p> <p class="card-text svelte-13d0vih">15 Total Community Service Hours</p> <p class="card-text svelte-13d0vih">2 Years Living In House</p> <p class="card-text svelte-13d0vih">Completion of Membership Development Program</p></div></div></div></div> <div class="accordion svelte-13d0vih" id="accordionPanelsStayOpenExample"><h1 class="accordion-title svelte-13d0vih">FAQ:</h1> <div class="accordion-item"><h2 class="accordion-header svelte-13d0vih"><button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">Isn&#39;t it expensive to join a fraternity?</button></h2> <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show"><div class="accordion-body"><strong>Yes and no.</strong>
              There are additional costs for local and national dues. However, those costs go directly back to you in the form of upgrades to the house, social events, and other resources. Also, there are scholarships and financial aid available which can make affording those dues extremely doable.</div></div></div> <div class="accordion-item"><h2 class="accordion-header svelte-13d0vih"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">How will joining a fraternity affect my grades?</button></h2> <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse"><div class="accordion-body"><strong>If anything, a fraternity will benefit your grades.</strong>
              There are many resources that become available when you join a fraternity. You will have classes with other members and will be able to talk to people who have already taken the classes you are in. We also have a library with study guides, textbooks, and exams from previous years.</div></div></div> <div class="accordion-item"><h2 class="accordion-header svelte-13d0vih"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">Am I still able to participate in other activities outside of the fraternity?</button></h2> <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse"><div class="accordion-body"><strong>Yes. Outside activities are strongly encouraged.</strong>
              At least one outside activity is required for initiation and you will definitely have time to attend almost all required meetings/practices. Because of ATO&#39;s strong campus presence, there is a good chance that you will have brothers in almost any extracurricular you sign up for.</div></div></div></div></div></body> <footer class="svelte-13d0vih">${validate_component(Contact, "Contact").$$render($$result, {}, {}, {})} </footer>`;
});
export {
  Page as default
};