

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/about/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.5bd3cb73.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/index.ff16eba4.js","_app/immutable/chunks/index.esm2017.83b1fb73.js","_app/immutable/chunks/Contact.cf2bda16.js"];
export const stylesheets = ["_app/immutable/assets/3.9bda06dd.css","_app/immutable/assets/Contact.67fc72ad.css"];
export const fonts = [];
