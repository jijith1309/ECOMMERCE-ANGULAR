import { Component, OnInit } from '@angular/core';
import { CheckoutService } from '../../core/services/checkout.services';
import { Cart } from '../../core/models/checkout/cart.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  
  constructor() { }

  ngOnInit() {
   
  }
}
