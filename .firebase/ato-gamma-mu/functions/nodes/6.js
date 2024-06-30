

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/philanthropy/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/6.3e917129.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/index.ff16eba4.js","_app/immutable/chunks/Contact.cf2bda16.js"];
export const stylesheets = ["_app/immutable/assets/6.716b6c64.css","_app/immutable/assets/Contact.67fc72ad.css"];
export const fonts = [];
