import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ProductService } from '../../../../services/product.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  
  

  constructor( 
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {

   
 
 }
 


 

}
