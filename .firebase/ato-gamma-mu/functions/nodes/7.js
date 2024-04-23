

export const index = 7;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/recruitment/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/7.f54c21dd.js","_app/immutable/chunks/scheduler.b7db4573.js","_app/immutable/chunks/index.1700605f.js","_app/immutable/chunks/Contact.89142387.js"];
export const stylesheets = ["_app/immutable/assets/7.4fcb4924.css","_app/immutable/assets/Contact.16cdf625.css"];
export const fonts = [];
