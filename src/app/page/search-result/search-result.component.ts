import { CartItem } from './../../model/cart-item';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { User } from 'src/app/model/user';
import { ProductService } from 'src/app/service/product.service';
import { UserService } from 'src/app/service/user.service';
import { ShoppingCartService } from 'src/app/service/shopping-cart.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {

  user: User = new User();
  cartItem: CartItem = new CartItem();
  cartItems: CartItem[] = [];
  cartItemsNew: CartItem[] = [];
  cartItemsExisting: CartItem[] = [];
  products: Product[] = [];
  searchText: string;
  displayMessage = false;
  productsInCart: Product[] = [];
  tempProd: Product[] = [];
  productsInOrder: Product[] = [];
  cartTotal = 0;
  tempCartTotal = 0;
  displaySearchResults = false;
  displayCart = false;
  displayOrder = false;
  displayPayment = false;
  orderConfirmation = false;

  constructor(private productService: ProductService, private userService: UserService,
              private shoppingCartService: ShoppingCartService) { }

  ngOnInit(): void {}

  searchProduct(searchText: string) {
    this.productService.searchProduct(searchText).subscribe(data => {
      this.products = data;
      this.messageCheck();
    });
  }

  getSearchText($event) {
    this.displayMessage = false;
    this.searchText = $event;
    this.searchProduct($event);
  }

  messageCheck(): void {
    if (this.searchText && this.products.length > 0) {
      this.displayMessage = false;
      this.displaySearchResults = true;
      this.displayCart = false;
    } else {
      this.displayMessage = true;
    }
  }

  // addToCart() {
  //   this.productsInCart = this.products.filter(prod => prod.selected === true);
  //   this.getOverallTotal();
  //   if (this.productsInCart.length > 0) {
  //     this.hideSearchResults();
  //     this.displayCartItems();
  //   }
  // }

  addToCart() {
    this.productsInCart = this.products.filter(prod => prod.selected === true);
    this.getOverallTotal();
    if (this.productsInCart.length > 0) {
      this.productsInCart.forEach(prodInCart => {
        const newCartItem = new CartItem();
        newCartItem.user = this.userService.getCurrentUser();
        newCartItem.product = prodInCart;
        newCartItem.quantity = prodInCart.quantitySelected;
        this.cartItemsNew.push(newCartItem);
      });
      this.shoppingCartService.getCartItems(this.userService.getCurrentUser().email).subscribe(data => {
        this.cartItemsExisting = data;
        this.cartItems = this.mergeCartItems(this.cartItemsExisting, this.cartItemsNew);
      });

      this.hideSearchResults();
      this.displayCartItems();
    }
  }

  mergeCartItems(existingItems: CartItem[], newItems: CartItem[]): CartItem[] {
    let merged: CartItem[] = [];
    newItems.forEach(newItem => {
      const tempNewItem = existingItems.filter(ex => ex.product.code === newItem.product.code && ex.user.email === newItem.user.email);
      if (tempNewItem.length === 0) {
        merged.push(newItem);
      }
    });
    merged.push(...existingItems);
    return merged;
  }

  hideSearchResults() {
    this.displaySearchResults = false;
  }

  displayCartItems() {
    this.displayCart = true;
  }

  hideCartItems() {
    this.displayCart = false;
  }

  onQuantityChange(code: string): void {
    const index = this.productsInCart.findIndex(prod => prod.code === code);

    if (this.productsInCart[index]?.quantitySelected) {
      this.productsInCart[index].subTotal = this.productsInCart[index].quantitySelected * this.productsInCart[index].price;
      this.getOverallTotal();
    }
  }

  getOverallTotal() {
    this.productsInCart.forEach(prod => {
      if (prod.subTotal) {
        this.tempCartTotal = this.tempCartTotal + prod.subTotal;
      }
    });
    this.cartTotal = this.tempCartTotal;
    this.tempCartTotal = 0;
  }

  addToOrder() {
    this.productsInOrder = this.productsInCart.filter(prod => prod.quantitySelected > 0);
    if (this.productsInOrder.length > 0) {
      this.hideCartItems();
      this.displayOrderItems();
    }
  }

  displayOrderItems() {
    this.displayOrder = true;
  }

  hideOrderItems() {
    this.displayOrder = false;
  }

  displayPaymentOptions() {
    this.displayPayment = true;
  }

  hidePaymentOptions() {
    this.displayPayment = false;
  }

  goToPayment() {
    this.hideOrderItems();
    this.displayPaymentOptions();
  }

  confirmOrder() {
    this.hidePaymentOptions();
    this.displayOrderConfirmation();
  }

  displayOrderConfirmation() {
    this.orderConfirmation = true;
  }

  hideOrderConfirmation() {
    this.orderConfirmation = false;
  }
}
