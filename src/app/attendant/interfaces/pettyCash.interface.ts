export interface Body {
    status: number;
    message: string;
    body: Register[];
}

export interface Register {
    id: number;
    createdAt: string;
    totalDeposit: string;
    description: string;
    status: string;
}