export interface CustomerData {
  _id: string;
  mobile: string;
  name: string;
  address: string;
  product: string;
  issue: string;
  status: 'pending' | 'completed';
  timestamp: string;
}