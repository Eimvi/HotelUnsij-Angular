export interface LoginResponse{
  id: number;
  name: string;
  lastName: string;
  email: string;
  numberPhone: string;
  address: string;
  foreigner: boolean;
  rfc: string;
  accessToken: string;
  workday: Workday;
  maid: Maid;
}

interface Maid {
  jobPosition: string;
}

interface Workday {
  startDay: string;
  endDay: string;
  hourStart: string;
  hourEnd: string;
  turn: string;
}
