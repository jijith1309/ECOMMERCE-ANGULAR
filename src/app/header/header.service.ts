import { Injectable } from "@angular/core";
import { UtilityService } from "../shared/utility.service";
import { Module } from "./models/MenuTree";
import { LoaderService } from "../shared/loader.service";
import { MenuCode } from "./models/menucode";
import { Subject } from "rxjs";


@Injectable()
export class HeaderService{

  menuChanged=new Subject<number>();
  
    constructor(private utlService: UtilityService, 
      private loaderService: LoaderService){

    }

    public  GetAllMenus(){
      let moduleArr:Module[]=[];
      this.loaderService.display(true);

        let url=this.utlService.baseUrl+'api/v1/Account/Menu';
         return  this.utlService.GetData(url).map(
              data=>{
                //   console.log(data.Data);
                  let menuList=data.Data.menulist;
                  for(let i=0;i<menuList.length;i++ ){
                    
                    let menu= new Module(
                        menuList[i].ModuleId,menuList[i].ParentID, menuList[i].ActiveNode,menuList[i].ModuleName,menuList[i].Children);
                        moduleArr.push(menu);
                }
                this.loaderService.display(false);
                 return moduleArr;
              }
             
          );

         
       
    }

    public  GetAllMenuCodes(){
      let moduleArr:MenuCode[]=[];
      this.loaderService.display(true);

        let url=this.utlService.baseUrl+'api/v1/Account/GetPrivilages';
         return  this.utlService.GetData(url).map(
              data=>{
                //   console.log(data.Data);
                  let menuList=data.Data;
                  for(let i=0;i<menuList.length;i++ ){
                    
                    let menu= new MenuCode(menuList[i].ModuleId,menuList[i].Code);
                        moduleArr.push(menu);
                }
                this.loaderService.display(false);
                 return moduleArr;
              }
             
          );

         
       
    }
}