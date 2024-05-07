

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/history/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.753ac044.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/index.d5163801.js","_app/immutable/chunks/Contact.ba3e24e4.js"];
export const stylesheets = ["_app/immutable/assets/5.dc8b0461.css","_app/immutable/assets/Contact.16cdf625.css"];
export const fonts = [];
