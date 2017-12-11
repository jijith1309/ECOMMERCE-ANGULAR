import { Component, OnInit, Input } from '@angular/core';
import { Module } from '../models/MenuTree';

@Component({
  selector: 'app-tree-view',
  templateUrl: './tree-view.component.html',
  styleUrls: ['./tree-view.component.css']
})
export class TreeViewComponent implements OnInit {
  @Input() menuList:Array<Module>;
  constructor() { }

  ngOnInit() {
  }

  CheckIfSubMenuExists(module:Module){
    
    if(module.Children.length>0 && module.Children!==null)
    {
      return true;
    }
    return false;
 }
}
