import { Component, OnInit, HostListener  } from '@angular/core';
import { RegService } from './service/reg.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormBuilder } from "@angular/forms";
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from "ngx-spinner"; //For Spinner


@Component({
  selector: 'app-dashboard',
  templateUrl: 'register.component.html'
})



export class RegisterComponent implements OnInit {

  // Password show and hide
  fieldTextType: boolean;
  repeatFieldTextType: boolean;

  // Gender Value
  //registergForm: FormGroup;
  genders: any = ['Male', 'Female', 'Others']

  // will go to database for registration
  f_name: string;
  l_name: string;
  phone: number;
  gender: string;
  password: any;
  u_type: 2;
  
  // leter will add to database
  email: string;

  // For Extra data
  titles: any;
  test: any;
  error: string;


  constructor(private userData: RegService, 
              private router: Router, 
              private fb: FormBuilder, private spinner: NgxSpinnerService,
              private toastr: ToastrService) { }

  ngOnInit() {
    //this.genderControl();
    this.spinnerFunction();
  }

  spinnerFunction(){
    /** spinner starts on init */
    this.spinner.show();
 
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 600);
  }
  

  // Form Validation reactive 
  registerForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    genderControl: new FormControl('', [Validators.required]),
    //Email: new FormControl('', [Validators.required, Validators.email]),
    Email: new FormControl('', [Validators.pattern("^[^@\\s]+@[^@\\s]+\\.[^@\\s]+$")]),
    phone: new FormControl('', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
    password: new FormControl('', [Validators.required, Validators.pattern("((?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{8,12})")]),
    confirmPassword: new FormControl('', [Validators.required, Validators.pattern("((?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{8,12})")])
  })

  // Toggle Eye button
  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }

  // Toggle Eye button
  toggleRepeatFieldTextType() {
    this.repeatFieldTextType = !this.repeatFieldTextType;
  }

  /* onSubmit() {
    alert(JSON.stringify(this.registerForm.value));
    alert("Login successfully");
  } */

  changeGender(gender){
    
    
    this.gender = gender.target.value.split(' ')[1];
    
  }

  
 /*  genderControl() {
    return this.registergForm = this.fb.group({
      genderControl: ['']
    });


    
  } */


  createObject() {
    let organizedData = {
      first_name: this.f_name,
      last_name: this.l_name,
      phone: this.phone,
      gender: this.gender,
      password: this.password,
      type: 2
    };
    this.insertData(organizedData);
  }

  private insertData(objectData) {
    this.userData.addUser(objectData).subscribe(res => {
      this.test = res;
      console.log(res);

      //Alert msg
      this.toastr.success('Please login', 'Register Successfully', {
        timeOut: 1000,
        progressBar: false
  
      })
      
      this.router.navigate(['/login']);
    })
  }

}

