export interface BodyGetActivities {
  status: number;
  message: string;
  body: Activity[];
}

export interface Activity {
  id: number;
  dateAssigned: string;
  title: string;
  description: string;
  status: string;
  hourStart?: string;
  hourEnd?: any;
}