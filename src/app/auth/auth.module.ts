import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SigninComponent } from "./signin/signin.component";
import { SignupComponent } from "./signup/signup.component";
import { AuthRoutingModule } from "./auth-routing.module";
import { CommonModule } from "@angular/common";
import { AppRoutingModule } from "../app.routing.module";
import { AuthenticationService } from "./auth.service";
import { AuthGuard } from "./auth.guard.service";


@NgModule({
  declarations:[
      SigninComponent,
      SignupComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AuthRoutingModule
  ],
  providers:[
    AuthenticationService,
     AuthGuard,
  ]
})
export class AuthModule {}