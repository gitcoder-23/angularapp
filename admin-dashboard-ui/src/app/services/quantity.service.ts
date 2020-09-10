import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class QuantityService {

  constructor( private http: HttpClient ) { }

  //Without NGRX select all selling units
  getAllUnits(){
    return this.http.get('api/getsellingunit');
  }

  //Using NGRX All function

  //List
  getProductsQuantity(){
    return this.http.get('api/getproductfulldetails');
   }

  //update
  updateQuantity(quantity: any, pid: number){
    console.log('Qty Data->', quantity, pid);
    //return this.http.put('api/putproductpricing/'+quantity, pid);
    var x = this.http.put('api/putproductpricing/'+quantity, pid);
    console.log('Updated', x);
    return x;

  }

  //Single data
  getOnequantity(pid: number){
    return this.http.get('api/getoneproductpricing/'+pid);
  }
}
