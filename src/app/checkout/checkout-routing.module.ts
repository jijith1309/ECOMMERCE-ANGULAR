import { Routes, RouterModule } from "@angular/router";
import { CartComponent } from "./cart/cart.component";
import { NgModule } from "@angular/core";

const checkOutRoutes: Routes =[
    {  path: 'checkout', component: CartComponent ,
    children:[
        { path: 'cart', component: CartComponent },
      ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(checkOutRoutes)
      ],
      exports: [RouterModule]
})

export class CheckOutRoutingModule{}