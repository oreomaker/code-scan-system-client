import axios from 'axios';

export interface DocMetaData {
  elfNum: number;
  ilfNum: number;
  functionPoints: number;
  phase: number; // 早期1，中期2，后期3，交付后即维护4
}

export interface functionPoint {
  functionDisc: string;
  catagory: string;
  reuse: string;
  modify: string;
}

export interface DocData {
  data: functionPoint[];
}

export interface EstimateRes {
  cost: number;
}
export function getDocumentMeta() {
  return axios.get('/api/docmeta');
}
export function getTableData() {
  return axios.get('/api/table');
}
export function estimate() {
  return axios.get('/api/estimate');
}
