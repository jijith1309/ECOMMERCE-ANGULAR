import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProductDetail } from '../Model/product.detail';
import { ProductService } from '../product.service';
import { CheckoutService } from '../../core/services/checkout.services';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
 
  pdtDetail:ProductDetail;
  id: number;
  constructor( private route:ActivatedRoute,
    private router:Router,
    private pdtService:ProductService,
    private checkoutService:CheckoutService
    ) { }

  ngOnInit() {
   
    this.route.params.subscribe(
      (params:Params)=>{
        debugger
        this.id = +params['id'];
        this.InitproductDetails();
      }
    );
  }
  InitproductDetails(){
    this.pdtService.GetProductDetails(this.id).subscribe(
      (product:ProductDetail)=>{
        this.pdtDetail=product;
        console.log(product);
      }
     );
  }
  
  AddToCart(){
    let qty=1;
    this.checkoutService.AddToCart(this.id,qty);
  }

}
