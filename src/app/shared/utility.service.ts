import { Http,Response, RequestOptions,Headers } from "@angular/http";

import { Injectable } from "@angular/core";
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import { Subject } from "rxjs/Subject";

@Injectable()
export class UtilityService
{
     baseUrl="http://ecommerceservices.azurewebsites.net/";
     headers = new Headers({ 'Content-Type': 'application/json; charset=utf-8','Authorization':this.RetrieveToken() });
     options = new RequestOptions({ headers: this.headers });
     
     RetrieveToken (){
      return  JSON.parse(localStorage.getItem('UserToken'));
      }
     public loading = new Subject<{loading: boolean, hasError: boolean, hasMsg: string}>();
     
    constructor(private http:Http)
    {

    }
    GetData(url:string){
      debugger
      this.requestInterceptor();
       return this.http.get(url,this.options).map( (response:Response)=>{
        return response.json();
    })
        .catch(this.onCatch.bind(this))
        .do((res: Response) => {
          this.onSubscribeSuccess(res);
        }, (error: any) => {
          this.onSubscribeError(error);
        })
        .finally(() => {
          this.onFinally();
        });
    
    }
    PostData(url:string,body:any){
     
      this.requestInterceptor();

      return this.http.post(url,body,this.options).map(
        (response:Response)=>{
            return response.json();
        }
       )
       .catch(this.onCatch.bind(this))

       .do((res: Response) => {
         this.onSubscribeSuccess(res);
       }, (error: any) => {
         this.onSubscribeError(error);
       })

       .finally(() => {
         this.onFinally();
       });
       
    }

    ShowMessage(msg:string){
     alert(msg);
    }

    private onSubscribeSuccess(res: Response): void {
        this.loading.next({
          loading: false, hasError: false, hasMsg: ''
        });
      }
    private onSubscribeError(error: any): void {
        console.log('Something Went wrong while subscribing', error);
        // // this.loaderService.popError();
        this.loading.next({
          loading: false, hasError: true, hasMsg: 'Something went wrong'
        });
      }
      private onFinally(): void {
        this.responseInterceptor();
      }
      private responseInterceptor(): void {
        console.log('Request Complete');
        this.loading.next({
          loading: false, hasError: false, hasMsg: ''
        });
      }
      private onCatch(error: any, caught: Observable<any>): Observable<any> {
        
        var errResponse=error.json();
        console.log('Catch', errResponse);
        // this.loaderService.popError();
        this.ShowMessage(errResponse.Message);
        return Observable.of(error);
      }
      private requestInterceptor(): void {
        console.log('Sending Request');
        this.loading.next({
          loading: true, hasError: false, hasMsg: ''
        });
      }
    
      

}