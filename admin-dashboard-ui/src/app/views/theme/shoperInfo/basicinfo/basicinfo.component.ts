import { Component, OnInit } from '@angular/core';
import { ToastrService } from "ngx-toastr";
import { FormGroup, FormControl, Validators, FormBuilder, Form } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";

import { ShopperService } from "app/services/shopper.service"

@Component({
  selector: 'app-basicinfo',
  templateUrl: './basicinfo.component.html',
})
export class BasicinfoComponent implements OnInit {
  genders: any = ["Male", "Female", "Others"];
  gender: string;

  //validation
  basicInfoForm: FormGroup;
  submitted = false;

  //For get data fetch into field
  userData: any;
  viewData: any;
  u_id: any;

  //ngmodels
  f_name:any;
  m_name:any;
  l_name:any;
  email:any;
  phone:any;


  constructor(
    public formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private toastr: ToastrService,
    private shopperData: ShopperService,
  ) { }

  ngOnInit(): void {
    this.getUserData();
    this.u_id = this.route.snapshot.params["u_id"];
    this.basicInfoValidation();
    this.disabledbydefault()
  }

  changeGender(gender) {
    this.gender = gender.target.value.split(" ")[1];
  }
  disabledbydefault() {
    var invisibleBasicInput: any = document.getElementsByClassName( "basic_input");
    var invisibleAddressInput: any = document.getElementsByClassName("address_input" );

    for (var i = 0; i != invisibleBasicInput.length; i++) {
      invisibleBasicInput[i].setAttribute("disabled", true);
    }

    for (var i = 0; i != invisibleAddressInput.length; i++) {
      invisibleAddressInput[i].setAttribute("disabled", true);
    }
  }

  basicShowHide() {
    var saveBtn = document.getElementsByClassName("basic_btn");
    var editPencil = document.getElementsByClassName("basic_pencil");
    var invisibleBasicInput: any = document.getElementsByClassName("basic_input");

    for (var i = 0; i != editPencil.length; i++) {
      editPencil[i].setAttribute("style", "display : none");
      saveBtn[i].setAttribute("style", "display : block");
    }
    for (var i = 0; i != invisibleBasicInput.length; i++) {
      invisibleBasicInput[i].removeAttribute("disabled", false);
    }
  }


  //  Form Validation reactive
  basicInfoValidation() {
    this.basicInfoForm = this.formBuilder.group({
      firstName: ["", Validators.required],
      middleName: [],
      lastName: ["", Validators.required],
      genderName: ["", Validators.required],
      Email: ["", [Validators.pattern("^[^@\\s]+@[^@\\s]+\\.[^@\\s]+$")]],
      phoneNumber: [
        "",
        [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")],
      ],
    });
  }

  get basicVal() {
    return this.basicInfoForm.controls;
  }


  basicInfo() {
    this.submitted = true;
    if (this.basicInfoForm.invalid) {
      return;
    }
    //alert('form fields are validated successfully!');
     //After click on save button toggle to fields disable
     var saveBtn = document.getElementsByClassName("basic_btn");
     var editPencil = document.getElementsByClassName("basic_pencil");
     var invisibleBasicInput: any = document.getElementsByClassName("basic_input");
     console.log('Invisible', invisibleBasicInput);

     for (var i = 0; i != editPencil.length; i++) {
       console.log('Invisible', invisibleBasicInput);
       editPencil[i].setAttribute("style", "display : block");
       saveBtn[i].setAttribute("style", "display : none");
     }
 
     for (var i = 0; i != invisibleBasicInput.length; i++) {
      
       invisibleBasicInput[i].removeAttribute("disabled", true);
       
     }
     
     
     
 //After click on save button toggle to fields disable End
    //Alert msg
    this.toastr.success(
      "Details submitted successfully",
      "Basic details editted",
      {
        timeOut: 1000,
        progressBar: false,
      }
    );
      

   
    
  }



  getUserData() {
    this.shopperData.getUserData().subscribe((data) => {
      this.userData = data;
      console.log("all user details", this.userData);
    });
  }

}
