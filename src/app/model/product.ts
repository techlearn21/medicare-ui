import { Category } from './category';

export class Product {
  code: string;
  name: string;
  category: Category;
  description: string;
  imageUrl: string;
  seller: string;
  enabled: string;
  price: number;
  quantityAvailable = 0;
  selected: boolean;
  quantitySelected = 0;
  subTotal = 0;
}
