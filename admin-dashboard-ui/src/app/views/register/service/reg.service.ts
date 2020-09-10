import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RegService {

  //private fake_url = 'https://jsonplaceholder.typicode.com/users';


  url = "api";


  constructor(private http: HttpClient) { }

  //Email and phone number already exists validation
  /*getUserByEmail(email: string) {
    return this.http.get<any[]>(`${this.fake_url}?email = ${email}`);
  }*/

   

 getUserByEmail(email: string) {

    return this.http.get<any[]>("api/checkemail",{
      params: new HttpParams().set('email', email)
    });
  } 

  /* getUserByPhone(phone: string) {

    return this.http.get<any[]>(this.fake_url,{
      params: new HttpParams().set('phone', phone)
    });
  }  */

   getUserByPhone(phone: string) {
     
    return this.http.get<any[]>("api/checkuser",{
      params: new HttpParams().set('phone', phone)
    });

    
  } 


  //inserting user or registration
  addUser(data: any) {
    return this.http.post(this.url + "/adduser", data);
  }
  


}
