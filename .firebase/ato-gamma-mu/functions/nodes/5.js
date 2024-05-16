

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/history/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.c66be741.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/index.d5163801.js","_app/immutable/chunks/Contact.24b398c0.js"];
export const stylesheets = ["_app/immutable/assets/5.25d8e0b0.css","_app/immutable/assets/Contact.67fc72ad.css"];
export const fonts = [];
