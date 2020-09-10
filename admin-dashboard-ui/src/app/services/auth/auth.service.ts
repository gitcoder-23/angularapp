import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap,mapTo,catchError} from 'rxjs/operators';
import { of,Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  getEmitter() {
    return this.http.get("api/login")  ;
  }
  
  // Token Identifire in localstorage
  private readonly JWT_AUT_TOKEN = 'AUTHORISE_TOKEN';
  private readonly REFRESH_TOKEN = 'REFRESH_TOKEN';

  private loggedUser: string;


  
  constructor(private http:HttpClient) { }
//Forget Pass
  ForgetPass(user:{ phone:string}):Observable<any>{
    return this.http.post('api/login',user)
      .pipe(
        tap((tokens:Tokens)=>{
          this.doForgetPass(user.phone,tokens)
        }),
        mapTo(true), 
        catchError(error=>{
          error.error
          return of(false)
        })
        );
    }
  

  Login(user:{ phone:string, password:string}):Observable<any>{
  return this.http.post('api/login',user)
    .pipe(
      tap((tokens:Tokens)=>{
        this.doUserLogin(user.phone,tokens)
      }),
      mapTo(true), 
      catchError(error=>{
        error.error
        return of(false)
      })
      );
  }


  Logout(){
    console.log(this.getAuthTokenFromRefreshToken);
    return this.http.post<any>('api/logout',
    {
      refreshToken: this.getLocalRefrashToken(),
    }).pipe(
      tap(()=>this.doUserLogout()),
      mapTo(true),
      catchError(err=>{
        err.err
        return of(false)
      })
    )
  }


  getAuthTokenFromRefreshToken(){
   // console.log(this.getLocalRefrashToken());
    return this.http.post<any>('api/token',{
      'refresh_token':this.getLocalRefrashToken()
    }).pipe(
      tap((token)=>{
        this.storeNewAuthToken(token)
      })
    )
  }
  
  isLoggedIn(){
    // Returning true of false from object
    return !! this.getLocalAuthToken();
  }

  private doForgetPass(phone:string,tokens:Tokens){
    this.loggedUser = phone;
    this.storeTokens(tokens);
  }
  

  private doUserLogin(phone:string,tokens:Tokens){
    this.loggedUser = phone;
    this.storeTokens(tokens);
  }

   doUserLogout(){
    this.loggedUser = null;
    this.removeTokens();
  }

  private storeNewAuthToken(token:Tokens){
    console.log('for intersepter test from srvice',token)
    localStorage.setItem(this.JWT_AUT_TOKEN,token.accessToken);
  }

  private storeTokens(tokens:Tokens){
    localStorage.setItem(this.JWT_AUT_TOKEN,tokens.token.authorise_token);
    localStorage.setItem(this.REFRESH_TOKEN,tokens.token.refreash_token)
  }

   getLocalAuthToken(){
    //  console.info(localStorage.getItem(this.JWT_AUT_TOKEN));
    return localStorage.getItem(this.JWT_AUT_TOKEN);
  }

  private getLocalRefrashToken(){
    return  localStorage.getItem(this.REFRESH_TOKEN);
  }


  private removeTokens(){
    localStorage.removeItem(this.JWT_AUT_TOKEN);
    localStorage.removeItem(this.REFRESH_TOKEN);
  }

}

class Tokens{
  authToken:string;
  refreshToken:string;
  token:any;
  accessToken:any;
}