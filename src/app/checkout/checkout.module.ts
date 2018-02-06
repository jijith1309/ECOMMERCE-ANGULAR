import { NgModule } from "@angular/core";
import { CartComponent } from "./cart/cart.component";
import { CartListComponent } from "./cart/components/cart-list/cart-list.component";
import { CartItemComponent } from "./cart/components/cart-list/cart-item/cart-item.component";
import { CheckOutRoutingModule } from "./checkout-routing.module";
import { CommonModule } from "@angular/common";
import { CheckoutService } from "../core/services/checkout.services";




@NgModule({
    declarations:[
        CartComponent,
        CartListComponent,
        CartItemComponent,
    ],
    imports:[
        CommonModule,
        CheckOutRoutingModule
    ],
    providers:[
        CheckoutService
    ]
})

export class CheckOutModule{}