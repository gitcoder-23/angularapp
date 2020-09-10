import { Component, OnInit } from '@angular/core';
  //import {AuthenticationService, TokenPayload} from '../../services/authentication.service';

  import { Router } from '@angular/router';
  import { FormGroup, FormControl, Validators } from '@angular/forms';
  import { from } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'resetpassword.component.html'
})
export class ResetpasswordComponent implements OnInit  {

  /*******Password show and hide****** */
  fieldTextType: boolean;
  repeatFieldTextType: boolean;
  
  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }

  toggleRepeatFieldTextType() {
    this.repeatFieldTextType = !this.repeatFieldTextType;
  }

  /*******Password show and hide end****** */


   /*******Form Validation reactive */
   resetPassword = new FormGroup({
    password: new FormControl('', [Validators.required, Validators.pattern("((?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{6,20})")]),
    confirmPassword: new FormControl('', [Validators.required, Validators.pattern("((?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{6,20})")])

    


  })

  onSubmit() {
    
    //alert(JSON.stringify(this.myInfo.value));
    alert("Request send successfully");
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
