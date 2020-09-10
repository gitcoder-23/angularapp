import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ShopperService } from '../../../../services/shopper.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-adminadd',
  templateUrl: './adminadd.component.html',
  styleUrls: ['./adminadd.component.scss']
})
export class AdminaddComponent implements OnInit {

 // Password show and hide
 addTextType: boolean;
 confTextType: boolean;
 
 gender: string;
 genders: any = ['Male', 'Female', 'Others']
 addAdminForm: FormGroup;
 
 submitted = false;

 //testsub = false;

 constructor(public formBuilder: FormBuilder, 
             private router: Router, private shopperData: ShopperService, 
             private route: ActivatedRoute,// For Edit data
             private httpClient: HttpClient, private toastr: ToastrService ) { }

 ngOnInit(): void {

   


   this.addAdminValidation();
   

}



addAdminValidation(){

 this.addAdminForm = this.formBuilder.group({
   firstName: ['', Validators.required],
   lastName: ['', Validators.required],
   phoneNumber: ['', Validators.required],
   genderName: ['', Validators.required],
   addPassword: ['', [Validators.required, Validators.pattern("((?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{8,12})")]],
   confPassword: ['', [Validators.required, Validators.pattern("((?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{8,12})")]]

  });

}

 get adminVal() {
 return this.addAdminForm.controls;
 }
 
 addAdmin(){
  
   
     this.submitted = true;
 
   if (this.addAdminForm.invalid) {
     console.log(this.addAdminForm)
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
 





 changeGender(gender) {


   this.gender = gender.target.value.split(' ')[1];
   
 }

 


//Numeric accepted
numberOnly(event): boolean {
 
 const charCode = (event.which) ? event.which : event.keyCode;
 if (charCode > 31 && (charCode < 48 || charCode > 57)) { 
   return false;
 }
 
   return true;
 
}





}
