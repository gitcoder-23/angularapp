import { Component, OnInit } from '@angular/core';
  //import {AuthenticationService, TokenPayload} from '../../services/authentication.service';

  import { Router } from '@angular/router';
  import { FormGroup, FormControl, Validators } from '@angular/forms';
  import { from } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'otp.component.html'
})
export class OtpComponent implements OnInit  {
/*******Password show and hide****** */
  fieldTextType: boolean;


  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }



/*******Password show and hide end****** */


   /*******Form Validation reactive */
   otpInfo = new FormGroup({
    otp: new FormControl('', [Validators.required, Validators.pattern("[0-9]{4,8}")])


  })

  onSubmit() {
    
    //alert(JSON.stringify(this.myInfo.value));
    alert("OTP sumbitted successfully");
  }



/*******Form Validation reactive end */





  constructor(private router: Router) { }

  ngOnInit() {


  }

   /* credentials: TokenPayload{

      id: 0,
      f_name: '',
      l_name: '',
      phone: '',
      gender: '',
      password: '',
      type_id: ''

    }

    constructor(private auth: AuthenticationService, private router: Router) {}

    login() {

      this.auth.login(this.Credentials).subscribe(
        () =>{
            this.router.navigateByUrl('/dashboard')

        },
        err => {

          console.error(err)
        }


      )



    }*/


 }
