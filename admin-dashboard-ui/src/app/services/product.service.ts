import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  //Add
  addProduct(product:any){
    return this.http.post('api/addproduct', product);
    
  }

  //List
  getProducts(){
   return this.http.get('api/getproductfulldetails');
  }

  //Edit
  updateProduct(product:any, pid:any){
    console.log('Service-Update>',pid);
    return this.http.put('api/putproduct/'+pid.pid,pid); //Here only 'pid' only for data parseInt

  }

  //Single data
  getSingleProduct(pid:number){
    return this.http.get('api/singleproduct/'+pid);
  }

  //Delete
   deleteProduct(pid:number){
     return this.http.delete('api/delproduct/'+pid);
    /* var x = this.http.delete('api/delproduct/'+pid);
    console.log('Del Data->', x);
    return x; */
  }

}
