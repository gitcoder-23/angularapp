import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { FormGroup, FormControl, Validators, FormBuilder, Form } from "@angular/forms";
import { ToastrService } from "ngx-toastr";

import {ShopperService} from 'app/services/shopper.service'


@Component({
  selector: 'app-addressinfo',
  templateUrl: './addressinfo.component.html',
})
export class AddressinfoComponent implements OnInit {
  addressInfoForm: FormGroup;
  addressSubmitted = false;

  country: string;
  state: string;
  states: any;
  countries: any;

  constructor(
    private shopperData: ShopperService,
    public formBuilder: FormBuilder,
    private route: ActivatedRoute, //to get id for edit and view
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.getStateValue();
    this.getCountryValue();
    this.addressInfoValidation();
  }

    //For State Selection And fetch to select field

    public getStateValue() {
      this.shopperData.getState().subscribe((states) => {
        this.states = states;
        console.log("All States", this.states);
      });
    }

    //For Country Selection And fetch to select field

    public getCountryValue() {
      this.shopperData.getCountry().subscribe((countries) => {
        this.countries = countries;
        console.log("All Country Data->", this.countries);
      });
    }

    changeCountryVal(country) {
      this.country = country.target.value.split(" ")[1];
    }
    changeState(state) {
      this.state = state.target.value;
    }

    //Address validation
  addressInfoValidation() {
    this.addressInfoForm = this.formBuilder.group({
      shopName: ["", Validators.required],
      streetName: ["", Validators.required],
      countryName: ["", Validators.required],
      stateName: ["", Validators.required],
      cityName: ["", Validators.required],
      zipCode: ["", [Validators.required, Validators.pattern("[0-9]{4,6}")]],
    });
  }

  get addressVal() {
    return this.addressInfoForm.controls;
  }

  addressInfo() {
    this.addressSubmitted = true;
    if (this.addressInfoForm.invalid) {
      return;
    }
    //alert("form fields are validated successfully!");

     //After click on save button toggle to fields disable
     var saveBtn = document.getElementsByClassName("address_btn");
     var editPencil = document.getElementsByClassName('address_pencil');
     var invisibleBasicInput:any = document.getElementsByClassName('address_input');


        editPencil[0].setAttribute('style', 'display : block');
        saveBtn[0].setAttribute('style', 'display : none');

       for(var i = 0; i!=invisibleBasicInput.length; i++){
         invisibleBasicInput[i].removeAttribute("disabled",true);
       }
     //Alert msg
     console.dir(editPencil[0])
     this.toastr.success('Details submitted successfully', 'Basic details editted', {
       timeOut: 1000,
       progressBar: false
     })
     //After click on save button toggle to fields disable End

  }


  addressShowHide() {
    var saveBtn = document.getElementsByClassName("address_btn");
    var editPencil = document.getElementsByClassName("address_pencil");
    var invisibleAddressInput: any = document.getElementsByClassName("address_input");

    for (var i = 0; i != editPencil.length; i++) {
      editPencil[i].setAttribute("style", "display : none");
      saveBtn[i].setAttribute("style", "display : block");
    }
    for (var i = 0; i != invisibleAddressInput.length; i++) {
      invisibleAddressInput[i].removeAttribute("disabled", false);
    }
  }

}
