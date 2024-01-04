import { User } from './user';

export interface Product {
  _id?: string;
  name: string;
  price: number;
  UserID?: User['_id'];
}
