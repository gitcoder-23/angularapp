import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, BehaviorSubject, observable } from 'rxjs';
import { catchError, filter, take, switchMap, map,first, tap } from 'rxjs/operators';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';


@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  private isRefreshing = false;
  private refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  constructor(public authService: AuthService,public router:Router) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    //adding authorised token stored in local storage
    if(this.authService.getLocalAuthToken()){
      request = this.addToken(request,this.authService.getLocalAuthToken());
    }
    
    return next.handle(request)
    .pipe(
      catchError((error: HttpErrorResponse) => {
        

        if (error instanceof HttpErrorResponse && error.status === 403) {
          //console.log("intersepter err " ,error.status)
          return this.handle403Error(request, next);
        }
        else if(error.status == 401){
          console.log('handeled in intersepter')
          this.router.navigate(['/login']);
        }
         else {
          return throwError(error);
        }
      }),
    )
  }

  private addToken(request:HttpRequest<any>,token){
    //why in need to clone
    return request.clone({
      setHeaders: {
        'Authorization': `Barer ${token}`
      }
    })
  }

  private handle403Error(request: HttpRequest<any>, next: HttpHandler) {
    if (!this.isRefreshing) {
      this.isRefreshing = true;
      this.refreshTokenSubject.next(null);
      
      return this.authService.getAuthTokenFromRefreshToken().pipe(
        switchMap((token: any) => {
          console.log('getting aut fron refresh',this.refreshTokenSubject);
          if(token == 401){
            console.log("hiii 401");
            this.router.navigate(['/login']);
          }
          else{

            this.isRefreshing = false;
            this.refreshTokenSubject.next(token.jwt);
            console.log('body observable',this.refreshTokenSubject.next(token.accessToken))
            return next.handle(this.addToken(request, token.accessToken));
          }
          
        }));

    }
      
  }


  
}

