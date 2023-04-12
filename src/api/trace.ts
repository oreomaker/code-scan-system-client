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

export interface TraceResult {
  id: number;
  projectUrl: string;
  version: string;
  vulnerability: string;
  textSimilarity: number;
  ctrlFlow: number;
  depdGraph: number;
  ast: number;
  similarity: number;
}

export function getTraceResult() {
  return axios.get('/api/trace');
}
