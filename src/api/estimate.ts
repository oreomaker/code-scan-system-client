import axios from 'axios';

export interface DocMetaData {
  // 自动填充，可修改
  elfNum: number; // elf文件数
  ilfNum: number; // ilf文件数

  serviceFactor: number; // 业务领域调整因子
  fieldFactor: number; // 应用领域调整因子
  integrityLevelFactor: number; // 完整性级别调整因子
  qualityFactor: number; // 质量要求调整因子
  devFactor: number; // 开发调整因素
  devCity: string; // 研发团队所在地
  phase: number; // 早期1，中期2，后期3，交付后即维护4
  // 自动填充，不可修改
  functionPoints: number; // 功能点数
  adjustedScale: number; // 调整后规模
  ajustmentFactor: number; // 软件调整因素，computed
  ajustedWorkload: number; // 调整后工作量，computed
}

export interface FunctionPoint {
  functionDisc: string;
  catagory: string;
  reuse: string;
  modify: string;
}

export interface DocData {
  data: FunctionPoint[];
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
