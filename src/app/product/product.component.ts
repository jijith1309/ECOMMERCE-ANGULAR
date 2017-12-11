import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../header/header.service';
import { ProductService } from './product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  // moduleId:number=1;
  constructor(private pdtService:ProductService) { }

  ngOnInit() {
   this.BindIntitialMethods();
  }
 
  BindIntitialMethods(){
    this.pdtService.BindMenuSelection();
    this.pdtService.menuSelChange.subscribe(
     (id:number)=>{
       console.log('Pdt Component:'+id);
     }
     );
  }

}
