/* eslint-disable @typescript-eslint/no-unused-vars */
const keySetLS = {
  accessToken: "access_token",
  refreshToken: "refresh_token",
} as const;

export const setTokenToLS = (
  key: (typeof keySetLS)[keyof typeof keySetLS],
  token: string
) => {
  return  token && localStorage.setItem(key, token);
};

export const getTokenToLS = (key: (typeof keySetLS)[keyof typeof keySetLS]) => {
  return localStorage.getItem(key);
};
