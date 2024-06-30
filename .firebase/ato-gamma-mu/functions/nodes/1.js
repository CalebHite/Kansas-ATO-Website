

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.578a9017.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/index.ff16eba4.js","_app/immutable/chunks/singletons.e5dadcc6.js","_app/immutable/chunks/paths.e36891ff.js"];
export const stylesheets = [];
export const fonts = [];
