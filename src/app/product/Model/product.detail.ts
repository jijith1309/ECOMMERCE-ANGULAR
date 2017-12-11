import { Brand } from "./Brand.model";
import { Seller } from "./seller.model";




export class ProductDetail{
    public Id:number;
    public name:string;
    public description:string;
    public imageList:string[];
    public imagePathList:string[];
    public cost:number;

    public brand:Brand;
    public seller:Seller;

    constructor(ID:number,name:string,desc:string,imageList:string[],pdtcost:number,imagePathList:string[],br:Brand,slr:Seller)
    {
        this.Id=ID;
        this.name=name;
        this.imageList=imageList;
        this.description=desc;
        this.imagePathList=imagePathList;
        this.cost=pdtcost;
        this.brand=br;
        this.seller=slr;
    }
}