import { Component, OnInit } from '@angular/core';
import { Cart } from '../../../../core/models/checkout/cart.model';
import { CheckoutService } from '../../../../core/services/checkout.services';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {
  cart:Cart;
  constructor(private checOutService:CheckoutService) { }

  ngOnInit() {
    this.BindCartDetails();
  }

  BindCartDetails(){
    this.checOutService.GetCartDetails().subscribe(
      (cartData:Cart)=>{
       this.cart=cartData;
      }
    );
  }

}
