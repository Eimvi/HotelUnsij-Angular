export interface BodyGetRegisters {
    status: number;
    message: string;
    body: Body;
}

export interface Body {
    list: Register[];
    count: number;
    page: number;
    page_count: number;
    page_size: number;
}

export interface Register {
    id: number;
    createdAt: string;
    totalDeposit: string;
    description: string;
    status: string;
}