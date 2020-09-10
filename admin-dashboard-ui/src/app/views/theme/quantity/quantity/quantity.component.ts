import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';


import { QuantityService } from '../../../../services/quantity.service';
import { QuantityModel } from '../model/quantity.model';
//NGRX Directory
import { Store, select } from "@ngrx/store";
import { MainState } from '../../../../stores/index';//Reducer add state file
import * as QuantityAction from '../../../../stores/quantity/quantity.actions';
import * as QuantitySelector from '../../../../stores/quantity/quantity.selectors';




@Component({
  selector: 'app-quantity',
  templateUrl: './quantity.component.html',
  styleUrls: ['./quantity.component.scss']
})
export class QuantityComponent implements OnInit {
 
  
  sellunit: string;
  //Static drop down
  //sellunits: any = ['Per Gm', 'Per Kg', 'Per Lit', 'Per ML', 'Per Piece'];
  sellingUnits: any;
  su_id: any;
  pid: any;

  //variables taken from input field
  qid: any;
  quantity: any;
  price: any;
  unit: any;
  id: any;

  currentUnitId:any;
  //currentSelectedUnit:any;

  manageQtyForm : FormGroup;
  
  isPasswordSubmitte = false;
 

  constructor(public formBuilder: FormBuilder, 
              private router: Router, private quantityService: QuantityService, 
              private route: ActivatedRoute,// For Edit data
              private httpClient: HttpClient, private toastr: ToastrService,
              private store: Store<MainState>
              ) { }



  ngOnInit(): void {

    
    
    this.manageQtyValidation();

    this.getAllSellingUnits();

    this.getQuantityData();
    //Using NGRX
    //this.getSingleQuantity();

  }

  /* getCurrentUnit(){
   const selectedArrayIndex = this.sellingUnits.indexOf((e)=>e.id == this.currentUnitId) 
   this.currentSelectedUnit = this.sellingUnits[selectedArrayIndex];
  } */

   //Get List value from actions and selectors with service using dispatch
   getQuantityData(){
    this.store.dispatch(QuantityAction.listQuantity()); 
    const quantityData = this.store.select(
      
      QuantitySelector.selectQuantities
    )
    quantityData.subscribe(currentQuantity => {
      console.log('sty Value->', currentQuantity);
      if(currentQuantity[0]){
       
        this.id = currentQuantity[0].id; //'pid' taken from model
        this.currentUnitId = currentQuantity[0].selling_unit_id;
       
        this.manageQtyForm.patchValue({
         
          quantity: currentQuantity[0].quantity, //Right side values taken from model
          price: currentQuantity[0].price,
          //unit: currentQuantity[0].unit, //'unit' value taken
          selling_unit_id: currentQuantity[0].selling_unit_id,
          id: currentQuantity[0].id 
        })
      }
    })
    
  }












  //Without NGRX select all selling units for unit drop-down
  public getAllSellingUnits(){

    this.quantityService.getAllUnits().subscribe(resUnit => {
      this.sellingUnits = resUnit;
      //console.log('All Units-->', this.sellingUnits);
    })
  }

  //Get single value for update
 /*  getSingleQuantity(){

    

  } */
  
  manageQtyValidation(){

    this.manageQtyForm = this.formBuilder.group({
      quantity: ['', Validators.required],
      price: ['', Validators.required],
      selling_unit_id: ['', Validators.required],
      id: null,
      
  
      });
  
    }
  
    get mval() {
    return this.manageQtyForm.controls;
    }
    
    manageQty(){
    this.isPasswordSubmitte = true;
    if (this.manageQtyForm.invalid) {
    return;
    }
    //alert('form fields are validated successfully!');

    const updatedQuantityData = {
      quantity: this.manageQtyForm.get('quantity').value,
      price: this.manageQtyForm.get('price').value,
      //unit: this.manageQtyForm.get('unit').value,
      sellingUnitId: this.manageQtyForm.get('selling_unit_id').value,
      id: this.manageQtyForm.get('id').value,
    };

    const id = this.manageQtyForm.get('id').value;
    console.log('Main Id-->', this.id);
    console.log('Update Data=>', updatedQuantityData);
   
    this.store.dispatch(QuantityAction.updateQuantity({quantity:updatedQuantityData, pid:id}));
     //Alert msg
     /* this.toastr.success('Settings updated successfully', 'Success', {
      timeOut: 1000 * 2,
      progressBar: true

    }) */
    
    }
  
    
    changeUnit(sellunit){
      
      this.sellunit = sellunit.target.value;
      
    }
 
 
  
  //Numeric accepted
  numberOnly(event): boolean {
    
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) { 
      return false;
    }
    
      return true;
    
  }
  
   
    //Numeric and dot accepted
  numberDotOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    const dot = event.target;
  
     if (charCode == 46) { 
      //  console.log('chart',el);
        if (dot.value.indexOf('.') === -1) { 
            return true; 
        } else { 
            return false; 
        } 
    } else { 
        if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  
  }
  }

}
