import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from "../../services/auth/auth.service";
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from "ngx-spinner"; //For Spinner


@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {
title= 'Login';
  //Define variables
  phone: string;
  password: string;
  //errMsg: any;
  incorrectLogin= false;
  //Show-hide password
  fieldTextType: boolean;


  constructor(
    private authService: AuthService, 
    private router: Router, private spinner: NgxSpinnerService,
    private toastr: ToastrService) { }

  ngOnInit() {

    this.observeDOMCredential();
    this.spinnerFunction();
    
  }

  spinnerFunction(){
    /** spinner starts on init */
    this.spinner.show();
 
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 800);
  }
  

 

  //Show-hide password
  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }

  //Field Validation 
  loginInfo = new FormGroup({
    phone: new FormControl('', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
    password: new FormControl('', [Validators.required, Validators.pattern("((?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{8,12})")])


  })

  onSubmit() {

    alert("Login successfully");
  }

  //Submit using Enter button 
  observeDOMCredential(){
    let login = document.getElementsByClassName('login_enter');
    
    login[0].addEventListener("keypress", (e:KeyboardEvent)=>{
      if(e.key.toLowerCase() == "enter"){
        this.login();
        console.log(this.login());

      }
    })
  }

  //Valid & invalid credentials
  login() {
  
    
    this.authService.Login({
      phone: this.phone,
      password: this.password
    })
      .subscribe(success => {
        if (success) {

          this.toastr.success('You are entering dashboard', 'Login Successfully', {
            timeOut: 1000,
            progressBar: false
      
          })

          this.router.navigate(['/dashboard']);
        }
        else {

         // this.errMsg = "Invalid credentials";
         this.toastr.error('Type valid credentials', 'Invalid', {
          timeOut: 1000*30,
          progressBar: false
    
        })
          /* this.incorrectLogin = true;
          setInterval(()=>{
            this.incorrectLogin = false;
          },1000*60*1) */
        }
      })
  }

 
   



}
