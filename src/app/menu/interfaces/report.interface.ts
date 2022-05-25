export interface BodyGetReport {
  status: number;
  message: string;
  body: Report;
}

export interface Report {
  id: number;
  dateAssigned: string;
  title: string;
  description: string;
  status: string;
  hourStart: string;
  hourEnd: string;
  reports: Reports;
}

export interface Reports {
  previousReport: PreviousReport;
  posteriorReport: PosteriorReport;
}

export interface PosteriorReport {
  description: string;
  dirtyClothes: string;
  active: boolean;
}

export interface PreviousReport {
  description: string;
  dirtLevel: number;
  active: boolean;
}
