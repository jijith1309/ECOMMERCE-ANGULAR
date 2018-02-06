import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../header/header.service';
import { ProductService } from './product.service';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  moduleSel:number=1;
  subscription:Subscription;
  constructor(private pdtService:ProductService
  ) { }

  ngOnInit() {
    
   this.BindIntitialMethods();
  }
 
  BindIntitialMethods(){
    this.pdtService.BindMenuSelection();
     //To send data to all subscribers from current component
    this.subscription= this.pdtService.menuSelChange.subscribe(
     (id:number)=>{
      //this.router.navigate(['../'],{relativeTo:this.route})
      this.moduleSel=id;
       console.log('Pdt Component:'+id);
      //this
     }
     );
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
