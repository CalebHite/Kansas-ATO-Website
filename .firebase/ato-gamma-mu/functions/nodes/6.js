

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/philanthropy/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/6.f6863aae.js","_app/immutable/chunks/scheduler.b7db4573.js","_app/immutable/chunks/index.1700605f.js","_app/immutable/chunks/Contact.89142387.js"];
export const stylesheets = ["_app/immutable/assets/6.dc7b6284.css","_app/immutable/assets/Contact.16cdf625.css"];
export const fonts = [];
