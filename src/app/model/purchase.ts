import { PurchaseItem } from './purchase-item';
import { User } from './user';


export class Purchase {
  user: User;
  purchaseItems: PurchaseItem[];
  date: Date;
  total: number;
}
