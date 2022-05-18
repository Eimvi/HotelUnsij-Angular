export interface LoginResponseBody {
  status: number;
  message: string;
  body: Profile;
}

export interface Profile {
  id: number;
  name: string;
  firstSurname: string;
  secondSurname: string;
  email: string;
  numberPhone: string;
  address: string;
  foreigner: boolean;
  rfc: string;
  accessToken: string;
  role: Role;
  workday: Workday;
}

interface Role {
  jobPosition: string;
}

interface Workday {
  startDay: string;
  endDay: string;
  hourStart: string;
  hourEnd: string;
  turn: string;
}
