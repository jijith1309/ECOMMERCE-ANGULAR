import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header/header.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AppRoutingModule } from './app.routing.module';
import { FooterComponent } from './footer/footer.component';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductFilterComponent } from './product/product-filter/product-filter.component';
import { ProductItemComponent } from './product/product-list/product-item/product-item.component';
import { AuthenticationService } from './auth/auth.service';
import { UtilityService } from './shared/utility.service';
import { AuthGuard } from './auth/auth.guard.service';
import { ProductService } from './product/product.service';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { ProductMenuComponent } from './header/product-menu/product-menu.component';
import { HeaderService } from './header/header.service';
// import { LoadingModule } from 'ngx-loading';
import { LoaderService } from './shared/loader.service';

import { LoadingIndicatorComponent } from './shared/loading-indicator/loading-indicator.component';
import { TreeViewComponent } from './header/tree-view/tree-view.component';
import { PrivilageCheckDirective } from './header/menu-display.directive';
import { CartComponent } from './checkout/cart/cart.component';
import { CheckoutService } from './core/services/checkout.services';


import { CartItemComponent } from './checkout/cart/components/cart-list/cart-item/cart-item.component';
import { CartListComponent } from './checkout/cart/components/cart-list/cart-list.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SigninComponent,
    SignupComponent,
    FooterComponent,
    ProductComponent,
    ProductListComponent,
    ProductFilterComponent,
    ProductItemComponent,
    ProductDetailComponent,
    ProductMenuComponent,
    LoadingIndicatorComponent,
    TreeViewComponent,
    PrivilageCheckDirective,
    CartComponent,
    CartListComponent,
    CartItemComponent
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    AppRoutingModule
    // LoadingModule
  ],
  providers: [
              AuthenticationService,
              UtilityService,
              AuthGuard,
              ProductService,
              HeaderService,
              LoaderService,
              CheckoutService
             ],
  bootstrap: [AppComponent]
})
export class AppModule { }
