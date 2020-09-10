import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';//Needed
import { Observable } from 'rxjs'; //Needed
import { Router } from '@angular/router';

import * as ProductSelector from '../../../stores/product/product.selectors';
import { ProductService } from '../../../services/product.service';
import { MainState } from '../../../stores/index';
import * as ProductAction from '../../../stores/product/product.actions';
import { ProductModel } from './model/product.model';
import { Console } from 'console';
import { tap } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from "ngx-spinner"; //For Spinner



@Component({
  templateUrl: 'productlist.component.html'
})
export class ProductlistComponent implements OnInit {

  productData$: Observable<ProductModel[]>;
  pid: any;
  loading= true;//For Spinner
  getProAll: any;

  //Delete Popup
  popoverTitle = 'Delete Confirm';
  popoverMessage = 'Do you want?';
  cancelDeleted = false;

  //For update Popup
  public updateTitle: string = 'Update Confirm';
  public updateMessage: string = 'Are you sure?';
  public cancelUpdated: boolean = false;


constructor(
    private productService: ProductService,
    private router: Router, private spinner: NgxSpinnerService,
    private store: Store<MainState>, private toastr: ToastrService,
    ) {}

    ngOnInit(){

      this.getProductData();
      
    }
    spinnerFunction(status){
      if(status){
        this.spinner.show();
        //console.log("i am pro ");
      }
    }

    getProductData(){
      //Get data dispatching from action
     this.store.dispatch(ProductAction.loadProducts());
      
      this.productData$ = this.store.pipe(select(ProductSelector.selectProducts));
     
      this.productData$.subscribe((resAllPro: any) =>{
        if(resAllPro.length){
          this.getProAll = resAllPro;
          this.loading = false;
          this.spinner.hide();
        console.log('data pro', this.getProAll);
        }
        
      })
      
    }
//Delete Popup Function
    public confirmDeletePro(pid){
      this.deleteProduct(pid)
    }

    public deleteProduct(pid){

      //var delPop = confirm ('Do you want to delete ??');
      if(pid){
        //console.log('Delete-Id>', pid);
        this.store.dispatch(ProductAction.deleteProduct({pid:pid}));         
          //Alert msg
          this.toastr.success('category deleted successfully', 'Success', {
            timeOut: 1000 * 2,
            progressBar: true

          })
      }else{
        this.toastr.error('category deletion failed', 'Failure', {
          timeOut: 1000 * 2,
          progressBar: true

        })

        this.getProductData();
      }

    }

    //Popup Update Function
  public confirmUpdated(pid){
    this.editProduct(pid)
  }

    editProduct(pid){
      //var confUp = confirm ('Do you want to edit ??');
      
        console.log('Edit-Id>', pid);
        this.store.dispatch(ProductAction.loadProduct({productId:pid})); 
        this.router.navigate(['/theme/product/edit/'+ pid]);
        //'productId' taken from action 
      
    }
  

 

}

