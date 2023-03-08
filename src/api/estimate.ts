import axios from 'axios';

export interface EstimateData {
  location: string;
  factor1: string;
  factor2: string;
}

export interface EstimateRes {
  cost: number;
}
export function estimate() {
  return axios.get('/api/estimate');
}
export function getTableData() {
  return axios.get('/api/table');
}
