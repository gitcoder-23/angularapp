import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CategoryService } from '../../../../services/category.service';
import { ToastrService } from 'ngx-toastr';
import { Store, select } from "@ngrx/store";
import { ProductService } from '../../../../services/product.service'
import { MainState } from '../../../../stores/index';
import * as ProductAction from '../../../../stores/product/product.actions';
import * as ProductSelector from '../../../../stores/product/product.selectors';
import { Observable } from 'rxjs';
import { ProductModel } from '../model/product.model';




@Component({
  selector: 'app-productadd',
  templateUrl: './productadd.component.html',
  styleUrls: ['./productadd.component.scss']
})
export class ProductaddComponent implements OnInit {
  
  cat_id: any;
  category: string;
  categories: any;
  public imagePath;
  imgURL: any;
  //public message: string;
  
 
  productInfoForm: FormGroup;
  submitted = false;

  //For Insert and get single data
  pid: any;
  category_id: any;
  product_code: any;
  product_name: any;
  product_brand_name: any;
  product_details: any;
  product_img: any;
  productId: any;
  categoryName: any;
  EditProduct: boolean = false;

  constructor(public formBuilder: FormBuilder, 
              private router: Router, private categoryService: CategoryService, 
              private route: ActivatedRoute,// For Edit data
              private store: Store<MainState>,
              private httpClient: HttpClient, private toastr: ToastrService ) { }

  ngOnInit() {

    this.cat_id=this.route.snapshot.params['cat_id'];// For Edit data
    this.getCategoryList(); //Fetch Data Into Category Field
    this.productInfoValidation();
    this.getSingleValue();

    //Immediate Invocable Function
    (() => {
      let pid = this.route.snapshot.params.pid;
      if (pid) {
        this.EditProduct = true;
        this.pid = pid;
        // this.getSingleValue();
      }
    })();

    console.log('Main PID->', typeof this.pid);
 
 }
 
  
  productInfo(){
  this.submitted = true;
  // console.log(this.submitted)
  if (this.productInfoForm.invalid) {
  return;
  }
  //this.productInfoForm.reset();
  //console.log('Print-data->', this.getData());

  if (this.EditProduct) {
    this.updateProduct();
    } else {
      this.productInsert();
    }
  }

  //For Update
  getSingleValue(){
    const productValue$: Observable<ProductModel> = this.store.select(
      ProductSelector.singleProductBasedOnId
    )
   
    productValue$.subscribe(currentProduct =>{
      console.log('getSingle-pro->', currentProduct);
      if(currentProduct){
        this.category_id= currentProduct.categoryName;
        this.product_name = currentProduct.productName;
        this.product_code= currentProduct.productCode;
        this.product_brand_name= currentProduct.brandName;
        this.product_details= currentProduct.productDetails;
        this.imgURL = currentProduct.productImage;
        this.pid= currentProduct.pid;
      }
    })
  } 
 
 //Update function
updateProduct() {
  const updatedProduct = {
    category_id: this.productInfoForm.get("category_id").value,
    product_code: this.productInfoForm.get("product_code").value,
    product_name: this.productInfoForm.get("product_name").value,
    product_brand_name: this.productInfoForm.get("product_brand_name").value,
    product_details: this.productInfoForm.get("product_details").value,
    product_img: this.productInfoForm.get("product_img").value,
    pid: this.pid
  };

  const pid = this.productInfoForm.get('pid').value;
  console.log('Main Id-->', this.pid);
  console.log('Update Data=>', updatedProduct);

  this.store.dispatch(ProductAction.updateProduct({product:updatedProduct, pid:pid}));
  this.toastr.success('Product update successfully', 'Success', {
    timeOut: 1000*2,
    progressBar: true

  })
  this.router.navigate(['/theme/productlist']);
  //this.clientForm.reset();
}



  //For Insert
  productInsert(){
    const insertProduct = {
      category_id: this.productInfoForm.get('category_id').value,
      product_code: this.productInfoForm.get('product_code').value,
      product_name: this.productInfoForm.get('product_name').value,
      product_brand_name: this.productInfoForm.get('product_brand_name').value,
      product_details: this.productInfoForm.get('product_details').value,
      product_img: this.productInfoForm.get('product_img').value,
    };

   this.store.dispatch(ProductAction.createProduct({product: insertProduct}));
    //{product: insertProduct} object distructering & 'product' coming from action
    //this.productInfoForm.reset();
    
      this.toastr.success('Product inserted successfully', 'Success', {
        timeOut: 1000*2,
        progressBar: true

      })
    
  }


  productInfoValidation(){

    this.productInfoForm = this.formBuilder.group({
      category_id: ['', Validators.required],
      product_code: [],
      product_name: ['', Validators.required],
      product_brand_name: ['', Validators.required],
      product_details: ['', [Validators.required,  Validators.maxLength(400),Validators.minLength(4)]],
      product_img: ['', Validators.required],
      pid: null
  
     });
  
   }

   get pval() {
    return this.productInfoForm.controls;
    }
  

  

  //Category List For Dropdown
  public getCategoryList(){
    this.categoryService.getCategoryList().subscribe(categories=>{
      this.categories = categories;
      //console.log('All Category Data->', this.categories);
    })
  }


  // Choose category using select dropdown
  changeCategory(category) {


    this.category = category.target.value.split(' ')[1];
    
  }

 
//Single Image Upload

preview(files) {
  if (files.length === 0)
    return;

  var mimeType = files[0].type;
  if (mimeType.match(/image\/*/) == null) {
    //this.message = "Only images are supported.";
    return;
  }

  var reader = new FileReader();
  this.imagePath = files;
  reader.readAsDataURL(files[0]); 
  reader.onload = (_event) => { 
    this.imgURL = reader.result; 
  }
}

//Single Image Upload End



 

}
