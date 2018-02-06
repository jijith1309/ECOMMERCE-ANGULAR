import { NgModule } from "@angular/core";

import { Routes, RouterModule } from "@angular/router";
import { ProductComponent } from "./product.component";
import { ProductStartComponent } from "./product-start/product-start.component";
import { ProductDetailComponent } from "./product-detail/product-detail.component";




const pdtRoutes:Routes=[
    // {  path: '', redirectTo:'/product',pathMatch:'full' },
    {  path: 'product', component: ProductComponent ,
    children:[
        { path: '', component: ProductStartComponent },
        { path: ':id', component: ProductDetailComponent },
      ]
    },
]



@NgModule({
    imports: [
      RouterModule.forChild(pdtRoutes)
    ],
    exports: [RouterModule]
  })
  export class ProductRoutingModule {}