import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { ProductComponent } from './product/product.component';
import { AuthGuard } from './auth/auth.guard.service';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { CartComponent } from './checkout/cart/cart.component';


const appRoutes: Routes =[
        {  path: '', redirectTo:'/product',pathMatch:'full' },
        
        {  path: 'product', component: ProductComponent,canActivate :[AuthGuard] ,
        children:[
            { path: '', component: ProductListComponent },
            { path: ':id', component: ProductDetailComponent },
          ]
        },
       

        {  path: 'signup', component: SignupComponent  },
        {  path: 'signin', component: SigninComponent  },

        {  path: 'cart', component: CartComponent  },
       
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports:[RouterModule]
})
export class AppRoutingModule {
    
 }