

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.b1f16a3b.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/index.d5163801.js","_app/immutable/chunks/index.esm2017.83b1fb73.js","_app/immutable/chunks/Contact.24b398c0.js","_app/immutable/chunks/singletons.1a41865f.js"];
export const stylesheets = ["_app/immutable/assets/2.5d8a56be.css","_app/immutable/assets/Contact.67fc72ad.css"];
export const fonts = [];
