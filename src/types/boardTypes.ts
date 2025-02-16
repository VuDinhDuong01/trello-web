
export type IBoard ={
    title: string;
    ownerIds: string[];
    memberIds?: string[];
    status: string;
    type: string;
    description?: string;
    permissionView: string;
    background: string;
    columnOrders?: string[];
} |  null

export interface IFilter {
    totalElement: number,
    size: 10,
    totalPage: number,
    record:IBoard[]
}

