import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  f_name : string = "";
  l_name : string = "";
  phone : any;
  gender : string = "";
  password : string = "";
  confirm_Password : string ="";
  
 

  accountInfo = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName : new FormControl('', Validators.required),
    // phoneNumber: new FormControl('', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
    password: new FormControl('', [Validators.required, Validators.pattern("(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}")]),
    confirmPassword: new FormControl('', [Validators.required, Validators.pattern("(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}")]),
    phoneNumber: new FormControl('', Validators.required)
  })

  onSubmit() {
    
    alert(JSON.stringify(this.accountInfo.value));
    // alert("Form editted successfully");
  }



  constructor(private router:Router) { }

  ngOnInit(): void {
  }

}
