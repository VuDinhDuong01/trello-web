/* eslint-disable @typescript-eslint/no-explicit-any */
import { Method } from "@/constant/method";
import { headers } from "../axios-client";
import { Register, VerifyToken } from "@/types/auth.types";
import { url } from "inspector";

export const URL = {
  Auth: {
    verifyEmail: (data: Pick<Register, "email">) => ({
      data,
      headers: headers.baseHeader(),
      url: "/api/v1/verify-email",
      method: Method.POST,
    }),
    verifyToken: (data: VerifyToken) => ({
      data,
      headers: headers.baseHeader(),
      url: "/api/v1/verify-token",
      method: Method.POST,
    }),

    register: (data: Register) => ({
      data,
      headers: headers.baseHeader(),
      url: "/api/v1/register",
      method: Method.POST,
    }),
    login: (data: Omit<Register, "username">) => ({
      data,
      headers: headers.baseHeader(),
      url: "/api/v1/login",
      method: Method.POST,
    }),
    sendToken: (data: Pick<Register, "email">) => ({
      data,
      headers: headers.baseHeader(),
      url: "/api/v1/send-token",
      method: Method.POST,
    }),
    getMe: () => ({
      headers: headers.headerApplication(),
      url: "/api/v1/me",
      method: Method.GET
    }),
    logout: (data: { refresh_token: string }) => ({
      headers: headers.headerApplication(),
      url: "/api/v1/logout",
      method: Method.POST,
      data
    })

  }
};
