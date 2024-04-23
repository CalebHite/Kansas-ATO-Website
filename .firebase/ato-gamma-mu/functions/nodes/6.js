

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/philanthropy/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/6.82f16683.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/index.ff16eba4.js","_app/immutable/chunks/Contact.db800497.js"];
export const stylesheets = ["_app/immutable/assets/6.dc7b6284.css","_app/immutable/assets/Contact.16cdf625.css"];
export const fonts = [];
