import axios from 'axios';

export interface TraceHistory {
  id: number;
  name: string;
  packageUrl: string;
  referencingId: number;
  projectUrl: string;
  version: string;
  vulnerability: string;
  textSimilarity: number;
  ctrlFlow: number;
  depdGraph: number;
  ast: number;
  similarity: number;
  cost: number;
  adjustCost: number;
}

export function getTraceHistory() {
  return axios.get('/api/t-history');
}
