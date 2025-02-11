import { localStorageData } from '@/Utils/local-storage';

import axios from "axios";
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
        Authorization: `Bearer ${localStorageData.getTokenToLS("access_token")}`,
    }),
    headerApplication: () => ({
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorageData.getTokenToLS("access_token")}`,
    }),
} as const


class validateError extends Error {
    status: number

    constructor({ status, message }: { status: number, message: string }) {
        super(message)
        this.status = status;
    }
}
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
        const url = response?.config?.url
        if (url === "/api/v1/login") {
            localStorageData.setTokenToLS("access_token", response?.data?.data?.token?.accessToken)
            localStorageData.setTokenToLS("refresh_token", response?.data?.data?.token?.refreshToken)
        } else if (url === "/api/v1/logout") {
            localStorageData.clearLS()
        }
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

        throw new validateError({
            status: err.response.data.error.code,
            message: err.response.data.error.message
        })
    }
};
