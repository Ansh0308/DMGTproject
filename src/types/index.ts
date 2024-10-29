export interface SearchFormData {
  from: string;
  to: string;
  date: string;
}

export interface Station {
  code: string;
  name: string;
}

export interface RouteSegment {
  trainNumber: string;
  trainName: string;
  departureStation: Station;
  arrivalStation: Station;
  departureTime: string;
  arrivalTime: string;
  duration: string;
  platform: string;
}

export interface Route {
  segments: RouteSegment[];
  totalDuration: string;
  totalFare: number;
  changes: number;
}