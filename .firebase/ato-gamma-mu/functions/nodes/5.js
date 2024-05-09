

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/history/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.fd7081aa.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/index.d5163801.js","_app/immutable/chunks/Contact.6751d59a.js"];
export const stylesheets = ["_app/immutable/assets/5.cce2b0b1.css","_app/immutable/assets/Contact.67fc72ad.css"];
export const fonts = [];
