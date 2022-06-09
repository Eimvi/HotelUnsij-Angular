export interface  RootObject {
    status: number;
    message: string;
    body: Body[];
} 

export interface Body {
    id: number;
    type: string;
    status: string;
    maidName: string;
    amenidades: Amenidade[];
    hourStart: string;
    hourEnd: string;
    dateAssigned: string;
}

export interface Amenidade {
    name: string;
    quantity: number;
}
