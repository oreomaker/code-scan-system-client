import axios from 'axios';

export interface CodeMetaData {
  applicationField: number;
  similarityThreshold: number;
  similarityWeight: number;
  controlFlowWeight: number;
  depdGraphWeight: number;
  astWeight: number;
  projectCost: number;
}

export function getTraceResult() {
  return axios.get('/api/trace');
}
