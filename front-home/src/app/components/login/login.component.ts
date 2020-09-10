import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl , Validators} from'@angular/forms'
  import { from } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginCustomer = new FormGroup({
    phone: new FormControl('', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
    password: new FormControl('', [Validators.required, Validators.pattern("(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}")])

  })
  onSubmit() {
    
    //alert(JSON.stringify(this.accountInfo.value));
     alert("you are sucessfully login");
  }


  constructor(private router:Router) { }

  ngOnInit(): void {
  }

}
