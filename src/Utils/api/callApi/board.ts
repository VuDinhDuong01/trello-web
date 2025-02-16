import { callApi } from "../axios-client"
import { URL } from "./header"

export const createBoard = async (data: IBoard) => {
    return callApi({
        ...URL.Boards.createBoard(data)
    })
}

export const getAllBoard = async (data:any)=>{
    return callApi({
        ...URL.Boards.getAllBoard(data)
    })
}

