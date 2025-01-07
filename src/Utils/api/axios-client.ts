/* eslint-disable @typescript-eslint/no-explicit-any */

import axios from "axios";
import { getTokenToLS } from "../local-storage";
import { Method } from "@/constant/method";

interface ApiPropType {
    url: string;
    method: typeof Method[keyof typeof Method];
    headers: any;
    data?: any;
    params?: any;
    checkEnvironment?: boolean;
}

export const headers = {
  baseHeader: () => ({
    "Content-Type": "application/json",
  }),
  headerMultipart: () => ({
    "Content-Type": "multipart/form-data",
    Authorization: `Bearer ${getTokenToLS("access_token")}`,
  }),
  headerApplication: () => ({
    "Content-Type": "application/json",
    Authorization: `Bearer ${getTokenToLS("access_token")}`,
  }),
} as const

axios.interceptors.request.use(
    function (config) {
        // Do something before request is sent
        return config;
    },
    function (error) {
        // Do something with request error
        return Promise.reject(error);
    }
);

axios.interceptors.response.use(
    function (response) {
        return response;
    },
    function (error) {
        return Promise.reject(error);
    }
);


export const callApi = async ({
    url,
    method,
    data,
    params,
    headers,
    checkEnvironment = true,
}: ApiPropType) => {
    try {
        const response = await axios.request({
            url,
            method,
            baseURL: checkEnvironment
                ? process.env.NEXT_PUBLIC_URL_BE_SERVER
                : process.env.NEXT_PUBLIC_URL_NEXT_SERVER,
            data,
            headers,
            params,
        });
        return response?.data;
    } catch (err: any) {
        console.log(err);
    }
};
