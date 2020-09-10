import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth/auth.service"
  //import {AuthenticationService, TokenPayload} from '../../services/authentication.service';

  import { Router } from '@angular/router';
  import { FormGroup, FormControl, Validators } from '@angular/forms';
  import { from } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'forgetpassword.component.html'
})
export class ForgetpasswordComponent implements OnInit  {

  // Password show and hide
  fieldTextType: boolean;
  phone: string;
  
  errMsg: any;
  incorrectForgetpass= false;


  onSubmit() {
    
    //alert(JSON.stringify(this.myInfo.value));
    alert("Login successfully");
  }

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.observeDOMCredential();

  }

  observeDOMCredential(){
    let forgetPass = document.getElementsByClassName('frogetpass_enter');
    
    forgetPass[0].addEventListener("keypress", (e:KeyboardEvent)=>{
      if(e.key.toLowerCase() == "enter"){
        this.forgetPass();
        console.log(this.forgetPass());

      }
    })
  }
//Button click
  forgetPass() {

    this.authService.ForgetPass({
      phone: this.phone
      
    })
      .subscribe(success => {
        if (success) {

          this.router.navigate(['/otp']);
        }
        else {

          this.errMsg = "Invalid credentials";
          this.incorrectForgetpass = true;
          setInterval(()=>{
            this.incorrectForgetpass = false;
          },1000*60*1)
        }
      })
  }

  //Password Validation
  forgetPassword = new FormGroup({
    phone: new FormControl('', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")])
    
  })

  //Password show & hide
  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }

  
  


 }
