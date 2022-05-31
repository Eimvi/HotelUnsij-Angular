export interface HousekeeperBodyGetReport {
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
  hourStart?: any;
  hourEnd?: any;
  reports: Reports;
}

export interface Reports {
  previousReport: PreviousReport;
  posteriorReport: PosteriorReport;
}

export interface PosteriorReport {
  description?: any;
  active: boolean;
}

export interface PreviousReport {
  description?: any;
  dirtLevel?: any;
  active: boolean;
}
