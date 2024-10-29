import axios, { AxiosError } from 'axios';
import type { SearchFormData, Route, APIErrorResponse } from '../types';

const api = axios.create({
  baseURL: 'http://localhost:5000/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export class APIError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'APIError';
  }
}

export const searchRoutes = async (searchData: SearchFormData): Promise<Route[]> => {
  try {
    const { data } = await api.post<Route[]>('/search-routes', searchData);
    return data;
  } catch (error) {
    if (error instanceof AxiosError) {
      const errorData = error.response?.data as APIErrorResponse;
      throw new APIError(errorData?.message || 'Failed to search routes');
    }
    throw new APIError('An unexpected error occurred');
  }
};

export const stations = [
  { code: "NDLS", name: "New Delhi" },
  { code: "BCT", name: "Mumbai Central" },
  { code: "CSMT", name: "Mumbai CST" },
  { code: "HWH", name: "Howrah Junction" },
  { code: "MAS", name: "Chennai Central" },
  { code: "SBC", name: "Bengaluru City" },
  { code: "BVI", name: "Bhivani" },
  { code: "PNBE", name: "Patna Junction" },
  { code: "ADI", name: "Ahmedabad Junction" },
  { code: "CNB", name: "Kanpur Central" },
  { code: "PUNE", name: "Pune Junction" },
  { code: "JAT", name: "Jammu Tawi" },
  { code: "LKO", name: "Lucknow" },
];