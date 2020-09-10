import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { FormGroup, FormControl, Validators, FormBuilder, } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { CategoryService } from "../../../services/category.service";
import { ToastrService } from "ngx-toastr";

@Component({
  templateUrl: "categoryadd.component.html",
})
export class CategoryaddComponent implements OnInit {
  
  
  catData: any;
  cat_id: any;
  imgURL: any;

  //Insert Object
  addCatValue: any;

  //Taken from cat_table
  cat_name: any;
  cat_meta: any;
  cat_detailse: any;
  local_cat_img_loc: any;
  categoryImgLoc: any;

  //Form Validation
  categoryDetailsForm: FormGroup;

  submitted = false;

  Edit: boolean = false;

  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private httpClient: HttpClient,
    private categoryService: CategoryService,
    private toastr: ToastrService,
    private route: ActivatedRoute //For data update needed
  ) {}

  ngOnInit() {
    this.categoryInfoValidation();

    //getSingleCatData for update
    //'cat_id' defined theme.routing module
    //Pass 'cat_id' to Categoryservice
    //Immediate Invocable Function
    (() => {
      let cat_id = this.route.snapshot.params.cat_id;
      console.log('Cat_id>>', cat_id)
      if (cat_id) {
        this.Edit = true;
        this.cat_id = cat_id;
        this.getSingleCatData();
      }
    })();

  }

//For Insert Variable Defined function
  getData() {
    return {
      categoryName: this.cat_name,
      categoryMeta: this.cat_meta,
      categoryDetails: this.cat_detailse,
      categoryImgLoc: this.local_cat_img_loc,
    };
  }
//For Single Variable Defined function
  setCatData(data: any) {
    console.log(" category data ", data.categoryName);
    (this.cat_name = data.categoryName),
      (this.cat_meta = data.categoryMeta),
      (this.cat_detailse = data.categoryDetails),
      (this.imgURL = data.categoryImgLoc);
  }

  // Form Validation
  categoryInfoValidation() {
    this.categoryDetailsForm = this.formBuilder.group({
      getCatId: [],
      categoryName: ["", Validators.required],
      seoURL: [],
      categoryDescription: [
        "",
        [
          Validators.required,
          Validators.maxLength(400),
          Validators.minLength(4),
        ],
      ],
      categoryImg: ["", Validators.required],
    });
  }

  get catVal() {
    return this.categoryDetailsForm.controls;
  }

 

  categoryDetailsVal() {
    this.submitted = true;
    if (this.categoryDetailsForm.invalid) {
      return;
    }
    
    //Need FormsModule & ReactiveFormsModule import in app.module.ts
    //insert & Update here
    if (this.Edit) {
      this.updateCategory();
      } else {
        this.insertCategory(this.getData());
      }
    
  }

 

  //Insert Function
  private insertCategory(objCategory) {
    this.categoryService.addCategoryData(objCategory)
    .subscribe((res: any) => {
      this.addCatValue = res;

      if(res.inserted){
        this.toastr.success('Category inserted successfully', 'Success', {
          timeOut: 1000*2,
          progressBar: true

        })

      }else{

      
        this.toastr.error('category insert failed', 'Failure', {
          timeOut: 1000*2,
          progressBar: true

        })
      }


      console.log("Add Cat-Value", res);
      
    });


  }

   //Get single data for update
   getSingleCatData() {
    this.categoryService.getOneCategory(this.cat_id).subscribe((res) => {
      console.log("One Cat Data", res);
      this.catData = res;
      this.setCatData(this.catData[0]);
      console.log("Full->>", this.cat_name);
    });
  }

  //Update data category
  private updateCategory() {
    this.categoryService
      .updateCategoryData(this.cat_id, this.getData())
      .subscribe((res: any) => {
        
        if(res.updated){
          this.toastr.error('category update failed', 'Failure', {
            timeOut: 1000*2,
            progressBar: true
  
          })
          
  
        }else{
          this.toastr.success('Category updated successfully', 'Success', {
            timeOut: 1000*2,
            progressBar: true
  
          })
          this.router.navigate(['/theme/categorylist']);
          
        }
        console.log("UpdatedData", res);
        
      });
  }

  

   



  //Single Image Preview

  public imagePath;
  preview(files) {
    if (files.length === 0) return;

    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
     
      return;
    }

    var reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.imgURL = reader.result;
    };
  }

  //Single Image Upload End

}
