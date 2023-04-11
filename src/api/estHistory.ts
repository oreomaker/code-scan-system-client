import axios from 'axios';

export interface EstHistory {
  id: number;
  name: string;
  docUrl: string;
  dataFile: string;
  funcPoint: number;
  scale: number;
  adjustedFactor: number;
  workload: number;
  city: string;
  cost: number;
}

export function getEstHistory() {
  return axios.get('/api/est-history');
}
