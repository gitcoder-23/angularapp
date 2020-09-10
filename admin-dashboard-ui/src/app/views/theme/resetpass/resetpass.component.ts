import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ShopperService } from '../../../services/shopper.service';
import { ToastrService } from 'ngx-toastr';
import { exitCode } from 'process';


@Component({
  templateUrl: 'resetpass.component.html'
})
export class ResetPassComponent implements OnInit {

  // Password show and hide
  addTextType: boolean;
  confTextType: boolean;
  oldTextType: boolean;
  newTextType: boolean;
  confirmTextType: boolean;
 
  resetPassForm : FormGroup;
  isPasswordSubmitte = false;

  //testsub = false;

  constructor(public formBuilder: FormBuilder, 
              private router: Router, private shopperData: ShopperService, 
              private route: ActivatedRoute,// For Edit data
              private httpClient: HttpClient, private toastr: ToastrService ) { }

  ngOnInit() {

    this.resetPassValidation();
 
 }
 


  resetPassValidation(){

    this.resetPassForm = this.formBuilder.group({
      oldPass: ['', [Validators.required, Validators.pattern("((?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{8,12})")]],
      newPass: ['', [Validators.required, Validators.pattern("((?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{8,12})")]],
      confirmPass: ['', [Validators.required, Validators.pattern("((?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{8,12})")]]
  
     });
  
   }

   get passVal() {
    return this.resetPassForm.controls;
    }
    
    resetPass(){
    this.isPasswordSubmitte = true;
    if (this.resetPassForm.invalid) {
    return;
    }
    alert('form fields are validated successfully!');
    }

  // Toggle Eye button  
  toggleAddTextType(){
    this.addTextType = !this.addTextType;
  }
  // Toggle Eye button  
  toggleConfTextType(){
    this.confTextType = !this.confTextType;
  }
  


  // Toggle Eye button
    toggleOldTextType() {
    this.oldTextType = !this.oldTextType;
  }

  // Toggle Eye button
  toggleNewTextType() {
    this.newTextType = !this.newTextType;
  }
  // Toggle Eye button
  toggleConfirmTextType(){
    this.confirmTextType = !this.confirmTextType;
  }


  
  




 



  

}


