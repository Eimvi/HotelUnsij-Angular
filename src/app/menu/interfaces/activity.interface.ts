export interface BodyGetActivities {
  status: number;
  message: string;
  body: Body;
}

export interface Body {
  list: Activity[];
  count: number;
  page: number;
  page_count: number;
  page_size: number;
}

export interface Activity {
  id: number;
  dateAssigned: string;
  title: string;
  description: string;
  status: string;
  hourStart?: any;
  hourEnd?: string;
}
