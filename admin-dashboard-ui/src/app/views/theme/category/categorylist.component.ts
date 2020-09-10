import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from '../../../services/category.service';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from "ngx-spinner"; //For Spinner


@Component({
  templateUrl: 'categorylist.component.html'
})
export class CategorylistComponent implements OnInit {

  //loading= true; //For Spinner
  
  //List data property
  categoryData: any;
  //Delete Popup
  popoverTitle = 'Delete Confirm';
  popoverMessage = 'Do you want?';
  cancelDeleted = false;
  
  //For update Popup
  public updateTitle: string = 'Update Confirm';
  public updateMessage: string = 'Are you sure?';
  public cancelUpdated: boolean = false;
  

  constructor(private categoryService: CategoryService,
    private router: Router, private httpClient: HttpClient,
    private toastr: ToastrService, private spinner: NgxSpinnerService,
    ) { }


  ngOnInit() {

    this.getCategoryData();

  }
  spinnerFunction(status){
    if(status){
      this.spinner.show();
      
    }
  }

  //Get data to display list
  public getCategoryData() {
    this.categoryService.getCategoryList().subscribe(categoryList => {
      this.categoryData = categoryList;
      
      /* if(categoryList){
        this.loading = false;
        this.spinner.hide();
      } */
      //console.log("List Data", this.categoryData);
    })

  }

  
  
  //Delete Popup Function
  confirmDeleted(cat_id){
   this.deleteCatecory(cat_id);
  }
  
  //Delete catagory from list

  public deleteCatecory(cat_id) {

    // var deleteConfirm = confirm('Do you really want to ... ?');


    this.categoryService.daleteCategorydata(cat_id)
      .subscribe((catDelete: any) => {
        console.log("Cat Delete", catDelete);
        if (catDelete.deleted) {

          //Alert msg
          this.toastr.success('category deleted successfully', 'Success', {
            timeOut: 1000 * 2,
            progressBar: true

          })
        }
        else {

          this.toastr.error('category deletion failed', 'Failure', {
            timeOut: 1000 * 2,
            progressBar: true

          })

        }

        this.getCategoryData();
      })
    

  }

  //Popup Update Function
  confirmUpdated(cat_id){
    this.updateCategoryClick(cat_id)
  }

//Update catagory from list route
  updateCategoryClick(cat_id) {

    this.router.navigate(['/theme/categoryadd/edit/'+ cat_id]);

  /* var updateData =  confirm("Do you want to update?");
  if(updateData){

    this.router.navigate(['/theme/categoryadd/edit/'+ cat_id])
  }
 */
  }




}

