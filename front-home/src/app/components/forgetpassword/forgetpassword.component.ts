import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.css']
})
export class ForgetpasswordComponent implements OnInit {
     
  phone : any;


  phoneInfo = new FormGroup({
    phoneNumber: new FormControl('', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")])


  })
  onSubmit() {
    
    //alert(JSON.stringify(this.accountInfo.value));
     alert("You are Sucessfully changed your password");
  }
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

}
