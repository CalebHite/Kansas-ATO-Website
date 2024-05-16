export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["alpha-tau-omega-logo.png","Alpha_Tau_Omega_Coat_of_Arms.png","asfalt.png","gold-cross.png","house.jpg","ku.png","location.png","rcr.png","recruitment.jpg","recruitment.png"]),
	mimeTypes: {".png":"image/png",".jpg":"image/jpeg"},
	_: {
		client: {"start":"_app/immutable/entry/start.52c74cf4.js","app":"_app/immutable/entry/app.4e110233.js","imports":["_app/immutable/entry/start.52c74cf4.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/singletons.1a41865f.js","_app/immutable/entry/app.4e110233.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/index.d5163801.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js')),
			__memo(() => import('./nodes/7.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/alumni",
				pattern: /^\/alumni\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/history",
				pattern: /^\/history\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/philanthropy",
				pattern: /^\/philanthropy\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/recruitment",
				pattern: /^\/recruitment\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
