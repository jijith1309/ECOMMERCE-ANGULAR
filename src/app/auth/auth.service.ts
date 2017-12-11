import { UtilityService } from "../shared/utility.service";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable()
export class AuthenticationService{
    
   constructor(private utilityService:UtilityService,private router:Router){}

    signinUser(username: string, password: string){
        const signInUrl=this.utilityService.baseUrl+'api/v1/Account/SignIn';
        var body={
              'LoginName':username,
              'Passwoord':password
        };
        var payload=JSON.stringify(body) ;

        this.utilityService.PostData(signInUrl,payload).subscribe(
           data=>{
               console.log(data);
               this.SettingLocalStorage(data.Data);
               this.router.navigate(['/']);

           }
       );
    }
    signupUser(){

    }
    LogOut(){
        localStorage.removeItem("UserDetails");
        localStorage.removeItem("UserToken");
        localStorage.removeItem("UserPrivilages");
    }
    SettingLocalStorage(userData){
        ;
        localStorage.setItem("UserDetails", JSON.stringify(userData["UserInfo"]));
        localStorage.setItem("UserToken", JSON.stringify(userData["Token"]));
        localStorage.setItem("UserPrivilages", JSON.stringify(userData["UserPrivilages"]));
    }
    IsActivated(){
        if (localStorage.getItem('UserToken')) {
            // logged in so return true
            return true;
        }
    }
}