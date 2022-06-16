export default interface IHistory {
  id?: number;
  time: string;
  httpCode: number;
  data: string;
  request: string;
  method: string;
}
