import { Injectable } from "@angular/core";
import { UtilityService } from "../shared/utility.service";
import { Product } from "./Model/product.model";
import { ProductDetail } from "./Model/product.detail";
import { Brand } from "./Model/Brand.model";
import { Seller } from "./Model/seller.model";
import { LoaderService } from "../shared/loader.service";
import { HeaderService } from "../header/header.service";
import { Subject } from "rxjs";


@Injectable()
export class ProductService {
 static tempImage="https://cdn2.gsmarena.com/vv/bigpic/xiaomi-redmi-note-4-sn.jpg";

moduleId:number;
menuSelChange=new Subject<number>();

 products:Product[]=[];
    constructor(
        private utlService: UtilityService,
        private loaderService: LoaderService,
        private hdrservice:HeaderService
       ) {}

    GetProducts(moduleId: string) {
        this.loaderService.display(true);
        let pdtArray:Product[]=[];
        
        let productUrl = this.utlService.baseUrl + 'api/v1/Product/GetProducts';
        var body = {
            "ModuleId": moduleId
        }
        var payload = JSON.stringify(body);
       return this.utlService.PostData(productUrl, payload).map(
            data => {
                let pdtList=data.Data;
                if(pdtList!='undefined' && pdtList!=null){
                    for(let i=0;i<pdtList.length;i++ ){
                        // console.log(pdtList[i]);
                        
                        let pdt= new Product(
                            pdtList[i].ProductId, pdtList[i].ProductName,pdtList[i].Description,pdtList[i].Images,pdtList[i].ProductPrice
                        );
                        pdtArray.push(pdt);
                    }
                }
               
                this.loaderService.display(false);
                
                return pdtArray;
            }
        );
       
    }
    GetProductDetails(productId:number){

        this.loaderService.display(true);

        let pdtDetails: ProductDetail;
        let productUrl = this.utlService.baseUrl + 'api/v1/Product/ProductDetails/'+productId;
          return  this.utlService.GetData(productUrl).map(
            data=>{
                ;
                let pdt=data.Data;
                let brand=new Brand(pdt.Brand.BrandId,pdt.Brand.BrandName,pdt.Brand.Description);
                let seller= new Seller(pdt.Seller.SellerId,pdt.Seller.Name,pdt.Seller.Address);  
                pdtDetails=new ProductDetail(
                   pdt.ProductId,
                   pdt.ProductName,
                   pdt.ProductName,
                   pdt.Images,
                   pdt.ProductPrice,
                   pdt.ImagePath,
                   brand,
                   seller
                );

                this.loaderService.display(false);
                
              return pdtDetails;
            }
        );
    }
    BindMenuSelection(){
        this.hdrservice.menuChanged.subscribe(
        (id:number)=>{
            this.menuSelChange.next(id) ;
            console.log('pdt service Subs'+id);
            this.moduleId=id;
        //   this.BindInitialProducts(this.moduleId);
        });
      }
}