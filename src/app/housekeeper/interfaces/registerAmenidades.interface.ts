export interface Maid {
  status: number;
  message: string;
  body: ChamberMaid[];
}
export interface ChamberMaid {
  id: number;
  name: string;
  firstSurname: string;
}

export interface Register {
  id: number;
  type: string;
  name: string;
  amenidades: Amenidad[];
}

export interface Amenidad {
  name: string;
  quantity: number;
}
