

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.54daf270.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/index.d5163801.js","_app/immutable/chunks/index.esm2017.83b1fb73.js","_app/immutable/chunks/Contact.ba3e24e4.js","_app/immutable/chunks/singletons.3ac5c2d1.js"];
export const stylesheets = ["_app/immutable/assets/2.69140aa8.css","_app/immutable/assets/Contact.16cdf625.css"];
export const fonts = [];
