import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';


import { AppRoutingModule } from './app.routing.module';
import { FooterComponent } from './footer/footer.component';


import { UtilityService } from './shared/utility.service';





import { LoaderService } from './shared/loader.service';

import { LoadingIndicatorComponent } from './shared/loading-indicator/loading-indicator.component';






import { AuthModule } from './auth/auth.module';
import { CheckOutModule } from './checkout/checkout.module';
import { ProductModule } from './product/product.module';
import { SharedModule } from './shared/shared.module';
import { HeaderModule } from './header/header.module';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    LoadingIndicatorComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    AppRoutingModule,
   
    AuthModule,
    CheckOutModule,
    ProductModule,
    SharedModule,
    HeaderModule,
    

  ],
  providers: [
              UtilityService,
              LoaderService,
             ],
  bootstrap: [AppComponent]
})
export class AppModule { }
