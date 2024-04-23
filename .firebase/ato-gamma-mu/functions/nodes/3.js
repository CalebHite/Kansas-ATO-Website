

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/about/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.e9fbf97e.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/index.ff16eba4.js","_app/immutable/chunks/index.esm2017.83b1fb73.js","_app/immutable/chunks/Contact.db800497.js"];
export const stylesheets = ["_app/immutable/assets/3.4aef20e5.css","_app/immutable/assets/Contact.16cdf625.css"];
export const fonts = [];
