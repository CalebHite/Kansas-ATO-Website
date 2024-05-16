

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/alumni/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.0256042f.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/index.d5163801.js","_app/immutable/chunks/Contact.24b398c0.js"];
export const stylesheets = ["_app/immutable/assets/4.2f7d9547.css","_app/immutable/assets/Contact.67fc72ad.css"];
export const fonts = [];
