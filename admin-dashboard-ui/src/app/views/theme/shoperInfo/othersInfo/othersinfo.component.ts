import { Component, OnInit } from '@angular/core';
import { ToastrService } from "ngx-toastr";
import { FormGroup, FormControl, Validators, FormBuilder, Form } from "@angular/forms";

@Component({
  selector: 'app-othersinfo',
  templateUrl: './othersinfo.component.html',
})
export class OthersinfoComponent implements OnInit {
    //First image preview
    public imagePath;
    imgURL: any = "assets/img/avatars/6.jpg";
    public message: string;
  
    //Second image preview
    public shopImagePath;
    shopImgURL: any = "assets/img/avatars/6.jpg";
    public shopMessage: string;
    
    //validation
    imageInfoForm: FormGroup;
    imageSubmitted = false;
  
  constructor(
    private toastr: ToastrService,
    public formBuilder: FormBuilder,
  ) { }

  ngOnInit(){
    this.imageInfoValidation();
  }
  imageInfoValidation() {
    this.imageInfoForm = this.formBuilder.group({
      shopImage: ["", Validators.required],
    });
  }

  get imgVal() {
    return this.imageInfoForm.controls;
  }

  imageInfo() {
    this.imageSubmitted = true;
    if (this.imageInfoForm.invalid) {
      return;
    }
    //alert("form fields are validated successfully!");
  }

  imageShowHide() {
    var ImageInputsAndSaveBtn = document.getElementsByClassName("image_edit");
    var labelx = document.getElementsByClassName("image_label");

    for (var i = 0; i != ImageInputsAndSaveBtn.length; i++) {
      labelx[0].setAttribute("style", "display : none");
      ImageInputsAndSaveBtn[i].setAttribute("style", "display : block");
    }
  }


  imageSave() {
    var hiddeninputs = document.getElementsByClassName("image_edit");

    var labelx = document.getElementsByClassName("image_label");

    for (var i = 0; i != hiddeninputs.length; i++) {
      labelx[0].setAttribute("style", "display : block");
      hiddeninputs[i].setAttribute("style", "display: none");
    }

    //Alert msg
    this.toastr.success(
      "Details submitted successfully",
      "Other details editted",
      {
        timeOut: 1000,
        progressBar: false,
      }
    );
  }

   //Single Image Preview Upload

   preview(files) {
    if (files.length === 0) return;

    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      // this.message = "Only images are supported.";
      return;
    }

    var reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.imgURL = reader.result;
    };
  }

  //Single Image Preview Upload
  shopPreview(files) {
    if (files.length === 0) return;

    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      //this.shopMessage = "Only images are supported.";
      return;
    }

    var reader = new FileReader();
    this.shopImagePath = files;
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.shopImgURL = reader.result;
    };
  }

  
  
}
