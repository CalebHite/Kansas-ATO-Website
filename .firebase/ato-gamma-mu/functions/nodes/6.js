

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/philanthropy/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/6.b4f22b14.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/index.d5163801.js","_app/immutable/chunks/Contact.0cbb744f.js"];
export const stylesheets = ["_app/immutable/assets/6.716b6c64.css","_app/immutable/assets/Contact.b3d57ed6.css"];
export const fonts = [];
