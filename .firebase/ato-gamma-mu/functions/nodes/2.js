

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.c2c521ba.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/index.ff16eba4.js","_app/immutable/chunks/index.esm2017.83b1fb73.js","_app/immutable/chunks/Contact.cf2bda16.js","_app/immutable/chunks/paths.e36891ff.js"];
export const stylesheets = ["_app/immutable/assets/2.946cf8a9.css","_app/immutable/assets/Contact.67fc72ad.css"];
export const fonts = [];
