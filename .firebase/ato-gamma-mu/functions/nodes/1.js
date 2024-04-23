

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.5dafc821.js","_app/immutable/chunks/scheduler.b7db4573.js","_app/immutable/chunks/index.1700605f.js","_app/immutable/chunks/singletons.c90d31d6.js","_app/immutable/chunks/index.409ab502.js"];
export const stylesheets = [];
export const fonts = [];
