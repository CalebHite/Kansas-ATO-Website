

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.dce21749.js","_app/immutable/chunks/scheduler.b7db4573.js","_app/immutable/chunks/index.1700605f.js","_app/immutable/chunks/index.esm2017.6b599bd6.js","_app/immutable/chunks/index.409ab502.js","_app/immutable/chunks/Contact.89142387.js"];
export const stylesheets = ["_app/immutable/assets/2.6582f267.css","_app/immutable/assets/Contact.16cdf625.css"];
export const fonts = [];
