import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ShopperService } from '../../../../services/shopper.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-resetadmin',
  templateUrl: './resetadmin.component.html',
  styleUrls: ['./resetadmin.component.scss']
})
export class ResetadminComponent implements OnInit {

  // Password show and hide
  
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

  ngOnInit(): void {

    
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
