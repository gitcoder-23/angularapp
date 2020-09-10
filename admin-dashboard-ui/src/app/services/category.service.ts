import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http"; //Needed

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  url = "api";

  constructor(private http : HttpClient) { }

  //Category API Start

  addCategoryData(categoryData: any){
    console.log("service",categoryData);

    return this.http.post("api/addcategory", categoryData);
    
  }

  updateCategoryData(cat_id, categoryData){

    console.log("updatePascal", cat_id);
    return this.http.put("api/putcategory/"+cat_id, categoryData);
    
  }

  getCategoryList(){
   return this.http.get('api/getcategory/');
  }

  daleteCategorydata(cat_id){
    return this.http.delete("api/delcategory/"+cat_id);

  }

   //For update category single api

   getOneCategory(cat_id: number){
    console.log("service Get", cat_id);
    return this.http.get('api/singlecategory/'+cat_id); // "cat_id" taken from component add

   }







}
