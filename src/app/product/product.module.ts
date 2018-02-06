import { NgModule } from "@angular/core";
import { ProductRoutingModule } from "./product-routing.module";
import { ProductComponent } from "./product.component";
import { ProductStartComponent } from "./product-start/product-start.component";
import { ProductDetail } from "./Model/product.detail";
import { ProductListComponent } from "./product-list/product-list.component";
import { ProductFilterComponent } from "./product-filter/product-filter.component";
import { ProductItemComponent } from "./product-list/product-item/product-item.component";
import { ProductDetailComponent } from "./product-detail/product-detail.component";
import { CommonModule } from "@angular/common";
import { ProductService } from "./product.service";



@NgModule({
    declarations:[
        ProductComponent,
        ProductListComponent,
        ProductFilterComponent,
        ProductItemComponent,
        ProductDetailComponent,
        ProductStartComponent
    ],
    imports: [
        CommonModule,
        ProductRoutingModule
    ],
    providers:[
        ProductService,
    ]
  })
  export class ProductModule {}