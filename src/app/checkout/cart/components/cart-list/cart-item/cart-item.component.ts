import { Component, OnInit, Input } from '@angular/core';
import { CartItem } from '../../../../../core/models/checkout/cart.item.model';
import { CheckoutService } from '../../../../../core/services/checkout.services';

@Component({
  // selector: 'app-cart-item',
  selector: '[app-cart-item]',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
  @Input() cartItem:CartItem;
  @Input() index:number;
  @Input() cartid:number;

  constructor(private checkoutService:CheckoutService) { }

  ngOnInit() {
  }

  DeleteCartItem(){
    this.checkoutService.DeleteCartItem(this.cartItem.cartItemId);
  }
}
