

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/philanthropy/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/6.de02e61e.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/index.d5163801.js","_app/immutable/chunks/Contact.ba3e24e4.js"];
export const stylesheets = ["_app/immutable/assets/6.b0cc83c7.css","_app/immutable/assets/Contact.16cdf625.css"];
export const fonts = [];
