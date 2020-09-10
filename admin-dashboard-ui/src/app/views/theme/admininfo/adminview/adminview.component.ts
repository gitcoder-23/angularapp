import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ShopperService } from '../../../../services/shopper.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-adminview',
  templateUrl: './adminview.component.html',
  styleUrls: ['./adminview.component.scss']
})
export class AdminviewComponent implements OnInit {

 

 //testsub = false;

 constructor(public formBuilder: FormBuilder, 
             private router: Router, private shopperData: ShopperService, 
             private route: ActivatedRoute,// For Edit data
             private httpClient: HttpClient, private toastr: ToastrService ) { }

 ngOnInit(): void {


}


}
