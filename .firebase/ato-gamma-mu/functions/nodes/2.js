

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.fcd04c2b.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/index.d5163801.js","_app/immutable/chunks/index.esm2017.83b1fb73.js","_app/immutable/chunks/Contact.0cbb744f.js","_app/immutable/chunks/singletons.c677de63.js"];
export const stylesheets = ["_app/immutable/assets/2.01dbe71a.css","_app/immutable/assets/Contact.b3d57ed6.css"];
export const fonts = [];
