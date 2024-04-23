

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/alumni/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.68fc383d.js","_app/immutable/chunks/scheduler.b7db4573.js","_app/immutable/chunks/index.1700605f.js","_app/immutable/chunks/Contact.89142387.js"];
export const stylesheets = ["_app/immutable/assets/4.2f7d9547.css","_app/immutable/assets/Contact.16cdf625.css"];
export const fonts = [];
