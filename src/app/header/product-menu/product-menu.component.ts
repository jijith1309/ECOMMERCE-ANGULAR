import { Component, OnInit, Input, Renderer2, ViewChild, ElementRef, Injectable } from '@angular/core';
import { HeaderService } from '../header.service';
import { Module } from '../models/MenuTree';
import { MenuCode } from '../models/menucode';
import { Subject } from 'rxjs';




@Component({
  selector: 'app-product-menu',
  templateUrl: './product-menu.component.html',
  // template: '<app-tree-view [menuList]="menuList"></app-tree-view>',
  styleUrls: ['./product-menu.component.css']
})
export class ProductMenuComponent implements OnInit {
 
  menuList:Module[]=[];
  menuArray:Array<MenuCode>;
  @ViewChild('menuPointer') menuPointer:ElementRef;

  constructor(private hdrService:HeaderService
   
    ) { }

  ngOnInit() {
    this.BindAllMenus();
    
  }

  BindAllMenus(){
    this.hdrService.GetAllMenuCodes().subscribe(data=>{
      this.menuArray=data;
      console.log(this.menuArray);
    });
  }
  onMenuSelect(event:any){
    // console.log('Menu Selected: '+event.target.parentElement.id);
    this.hdrService.menuChanged.next(event.target.parentElement.id);
  }
}
