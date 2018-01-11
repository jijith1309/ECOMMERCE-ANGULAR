import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from '../Model/product.model';
import { ProductService } from '../product.service';

import { HeaderService } from '../../header/header.service';
import { Input } from '@angular/core/src/metadata/directives';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
// export class ProductListComponent implements OnInit {
//   moduleId:number=1;
//   products:Product[]=[];
//   constructor(private pdtService:ProductService,
//     private hdrservice:HeaderService
//   ) { }

//   ngOnInit() {
//    this.BindMenuSelection();
//   }

//   BindInitialProducts(Id:number){
//     this.products.length=0;
//     this.pdtService.GetProducts(Id.toString()).subscribe(
//       data=>{
//        this.products=data;
//        console.log('List: '+this.products);
//       }
//     );
//   }
//   BindMenuSelection(){
//     this.hdrservice.menuChanged.subscribe(
//     (id:number)=>{
//       this.moduleId=id;
//       console.log('menu Change Subs'+id);
//       this.BindInitialProducts(this.moduleId);
//     });
//   }
//   ngOnDestroy(){
//   // this.hdrservice.menuChanged.unsubscribe();
//   }
// }
export class ProductListComponent implements OnInit {
 moduleId:number=1;
  products:Product[]=[];
  constructor(private pdtService:ProductService
  ) { }

  ngOnInit() {
    
   this.BindMenuSelection();
  }

  BindInitialProducts(Id:number){
    
    this.products.length=0;
    this.pdtService.GetProducts(Id.toString()).subscribe(
      data=>{
       this.products=data;
       console.log('List: '+this.products);
      }
    );
  }
  BindMenuSelection(){
    
    // this.hdrservice.menuChanged.subscribe(
    // (id:number)=>{
    //   this.moduleId=id;
    //   console.log('menu Change Subs'+id);
    //   this.BindInitialProducts(this.moduleId);
    // });
    // this.moduleId =this.pdtService.moduleId;
    this.BindInitialProducts(this.moduleId);
  }
 
}
