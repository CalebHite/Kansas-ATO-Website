

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/about/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.4c54f57d.js","_app/immutable/chunks/scheduler.b7db4573.js","_app/immutable/chunks/index.1700605f.js","_app/immutable/chunks/index.esm2017.6b599bd6.js","_app/immutable/chunks/index.409ab502.js","_app/immutable/chunks/Contact.89142387.js"];
export const stylesheets = ["_app/immutable/assets/3.55e19356.css","_app/immutable/assets/Contact.16cdf625.css"];
export const fonts = [];
