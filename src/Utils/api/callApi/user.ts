import { Register, VerifyToken } from "@/types/auth.types"
import { callApi } from "../axios-client"
import { URL } from "./header"

export const verifyEmail=async(data: Pick<Register,"email">)=>{
    return callApi({
        ...URL.Auth.verifyEmail(data)
    })
}

export const verifyToken=async(data:VerifyToken)=>{
    return callApi({
        ...URL.Auth.verifyToken(data)
    })
}

export const register=async(data:Register)=>{
    return  callApi({
        ...URL.Auth.register(data)
    })
}

export const login = async(data:Omit<Register,"username">)=>{
    return  callApi({
        ...URL.Auth.login(data)
    })
}

export const sendToken= async(data:Pick<Register,"email">)=>{
    return  callApi({
        ...URL.Auth.sendToken(data)
    })
}