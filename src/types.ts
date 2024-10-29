export interface Station {
  code: string;
  name: string;
}

export interface SearchFormData {
  from: string;
  to: string;
  date: string;
}

export interface TrainSegment {
  trainNumber: string;
  trainName: string;
  departureStation: {
    code: string;
    name: string;
  };
  arrivalStation: {
    code: string;
    name: string;
  };
  departureTime: string;
  arrivalTime: string;
  duration: string;
  platform: string;
}

export interface Route {
  segments: TrainSegment[];
  totalDuration: string;
  totalFare: number;
  changes: number;
}

export interface APIErrorResponse {
  error: string;
  message?: string;
}