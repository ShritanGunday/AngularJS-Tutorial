import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  items = this.cartService.getItems();
  checkoutForm = this.formBuilder.group({
    name: ' ',
    address: ' ',
  });

  constructor (
    private cartService: CartService,
    private formBuilder: FormBuilder,
  ) {}

  clearCart(): void {
    this.cartService.clearCart();
    window.alert('Cart has been cleared');
  }

  onSubmit(): void {
    this.items = this.cartService.clearCart();
    window.alert('Your order form has been submitted');
    console.warn('Your order form has been submitted', this.checkoutForm.value);
    this.checkoutForm.reset;
  }
}
