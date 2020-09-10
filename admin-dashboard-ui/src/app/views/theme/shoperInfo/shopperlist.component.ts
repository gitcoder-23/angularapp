import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShopperService } from '../../../services/shopper.service';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Component({
  templateUrl: 'shopperlist.component.html'
})
export class ShopperlistComponent implements OnInit {

  //List data property
  userData: any;


  constructor(private shopperData: ShopperService, 
    private router: Router, private httpClient : HttpClient,
    private toastr: ToastrService) { }

  
  
  ngOnInit(){


    this.getUserData();
  }

  
  getUserData(){
    this.shopperData.getUserData().subscribe(data => {

      this.userData= data;
      console.log(this.userData);
    })

  }




}

