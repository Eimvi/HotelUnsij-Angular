export interface  Body {
    status: number;
    message: string;
    body: Register[];
} 

export interface Register {
    id: number;
    type: string;
    status: string;
    maidName: string;
    amenidades: Amenidades[];
    hourStart: string;
    hourEnd: string;
    dateAssigned: string;
}

export interface Amenidades {
    name: string;
    quantity: number;
}
