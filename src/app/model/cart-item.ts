import { Product } from './product';
import { User } from './user';

export class CartItem
 {
   user: User;
   product: Product;
   quantity: number;
   subTotal: number;
 }
