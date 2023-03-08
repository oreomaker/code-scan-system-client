import axios from 'axios';

export interface EstimateData {
  location: string;
  factor1: string;
  factor2: string;
}

export interface EstimateRes {
  cost: number;
}
export function estimate(data: EstimateData) {
  return axios.post<EstimateRes>('/api/estimate', data);
}
export function getTableData() {
  return axios.get('/api/table');
}
