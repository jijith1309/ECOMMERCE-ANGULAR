import { Injectable } from "@angular/core";
import { UtilityService } from "../../shared/utility.service";
import { LoaderService } from "../../shared/loader.service";
import { Cart } from "../models/checkout/cart.model";
import { CartItem } from "../models/checkout/cart.item.model";
import { CartProduct } from "../models/checkout/cart.product.model";


@Injectable()
export class CheckoutService {
  
  constructor(private utlService: UtilityService, 
    private loaderService: LoaderService){
  }



  ngOnInit(){

  }

  GetCartDetails(){
      let cart:Cart;
      
      this.loaderService.display(true);

      let cartUrl = this.utlService.baseUrl + 'api/v1/Order/MyCart';

      return  this.utlService.GetData(cartUrl).map(data=>{
      
        let cartData=data.Data;
        console.log('CheckOut Service:'+cartData);
        if(cartData!='undefined' && cartData!=null){
          // cart.cartId=cartData.CartId;

          let cartItemList=cartData.CartItemList;
          let cartItemArr=new Array<CartItem>();

          for(let i=0;i<cartItemList.length;i++ ){
            console.log(cartItemList[i]);
                let cartitem=new CartItem();
                cartitem.cartItemId=cartItemList[i].CartItemId;

                let cartPdt=new CartProduct();
                cartPdt.productId==cartItemList[i].CartProduct.ProductId;
                cartPdt.productCost=cartItemList[i].CartProduct.ProductPrice;
                cartPdt.productImage=cartItemList[i].CartProduct.DefImage;
                cartPdt.productQty=cartItemList[i].CartProduct.ProductQty;
                cartPdt.productName=cartItemList[i].CartProduct.ProductName;

                cartitem.cartProduct=cartPdt;

                cartItemArr.push(cartitem);
          }
          
          this.loaderService.display(false);
          return cart=new Cart(cartData.CartId,0,cartItemArr);
      }
      
      });
  }
  AddToCart(productId:number,qty:number){
   
    let addcartUrl=this.utlService.baseUrl+'api/v1/Order/AddToCart';
    var body={
          'ProductId':productId,
          'Quantity':qty
    };
    var payload=JSON.stringify(body) ;
    this.utlService.PostData(addcartUrl,payload).subscribe(
       data=>{
         console.log(data)
         if(data.Data){
          this.utlService.ShowMessage(data.Message)
        }
       }
   );
  }
  DeleteCartItem(cartItemId:number){
   let delCartUrl=this.utlService.baseUrl+'api/v1/Order/DeleteCartItem/'+cartItemId;
   this.utlService.GetData(delCartUrl).subscribe(
    data=>{
      console.log(data)
        if(data.Data){
          this.utlService.ShowMessage(data.Message)
        }
    }
);
  }
}