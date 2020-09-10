import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http"; //Needed
import { Observable } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';





@Injectable({
  providedIn: 'root'
})
export class ShopperService {

  
  url = "api";

  constructor( private http : HttpClient ) { }

 
//All apis for add-edit-delete-fetch
  getUserData(){

    //return this.http.get('https://jsonplaceholder.typicode.com/posts');
    return this.http.get(this.url + "/getuser");
  }

  createData(userInfo){

    return this.http.post(this.url + "/adduser", userInfo);
  }

  //get single user data

  getSingleUserData(u_id){

    
    return this.http.get(`api/singleuser/${6}`);
   
    
  }

//All apis for add-edit-delete-fetch end
  getState(){
    return this.http.get(this.url+"/getstate");
  }

  getCountry(){
    return this.http.get(this.url+"/getcountry");
  }


   


  




}
