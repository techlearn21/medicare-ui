import { Product } from './product';
import { Purchase } from './purchase';
import { User } from './user';

export class PurchaseItem {
  purchase: Purchase;
  user: User;
  product: Product;
  price: number;
  quantity: number;
  subTotal: number;
}
