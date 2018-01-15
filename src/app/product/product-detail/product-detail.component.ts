import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProductDetail } from '../Model/product.detail';
import { ProductService } from '../product.service';

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
    private pdtService:ProductService
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


}
