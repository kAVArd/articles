export type TGenerateOptions = {
  method: 'POST' | 'GET' | 'PUT' | 'DELETE' | 'PATCH';
  url: string;
  data?: any;
  params?: any;
};

export interface IFormatResponse<T = any> {
  headers: any;
  data: T;
  status: number;
  message?: string;
  errors?: any[];
}
