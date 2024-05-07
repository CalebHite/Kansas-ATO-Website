

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/about/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.8ae0d8b9.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/index.d5163801.js","_app/immutable/chunks/index.esm2017.83b1fb73.js","_app/immutable/chunks/Contact.0cbb744f.js"];
export const stylesheets = ["_app/immutable/assets/3.4aef20e5.css","_app/immutable/assets/Contact.b3d57ed6.css"];
export const fonts = [];
