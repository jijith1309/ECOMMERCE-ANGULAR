
import { CartItem } from "./cart.item.model";

export class Cart{
    // public cartId:number;
    // public subTotal:number;
    // public cartItemList:CartItem[];
    constructor(public cartId:number,public subTotal:number,public cartItemList:CartItem[])
    {
        // this.cartId=cartId;
        // this.subTotal=subTotal;
    }
}