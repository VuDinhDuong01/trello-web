'use client'
const keySetLS = {
	accessToken: 'access_token',
	refreshToken: 'refresh_token',
	countDown: 'count_down',
} as const;

type KeyProp = (typeof keySetLS)[keyof typeof keySetLS];

export const localStorageData = {
	setTokenToLS: (key: KeyProp, token: string) => {
		if (typeof window === "undefined") return;
		localStorage.setItem(key, token);
	},
	getTokenToLS: (key: KeyProp) => {
		if (typeof window === "undefined") return null;
		return localStorage.getItem(key);
	},
	clearLS: () => {
		if (typeof window === "undefined") return;
		localStorage.clear();
	},
	removeItemInLS: (key: KeyProp) => {
		if (typeof window === "undefined") return;
		localStorage.removeItem(key);
	},
};
