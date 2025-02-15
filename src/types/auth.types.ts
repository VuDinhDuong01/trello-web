


export interface VerifyToken{
    email: string, 
    token: string 
}

export interface Register{
    email: string, 
    password: string ,
    username: string 
}

export type IUser = {
    email : string 
    avatar: string 
    role ?: string[]
    username: string 
    createdAt?: number
    isActive?: boolean
    isDelete?: boolean
    updatedAt?: number
    updatedBy?: string 
} 