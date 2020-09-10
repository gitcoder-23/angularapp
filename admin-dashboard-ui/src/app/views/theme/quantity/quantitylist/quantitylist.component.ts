import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';//Needed
import { Observable } from 'rxjs'; //Needed
import { Router } from '@angular/router';

import * as QuantitySelector from '../../../../stores/quantity/quantity.selectors';
import { QuantityService } from '../../../../services/quantity.service';
import { MainState } from '../../../../stores/index';
import * as QuantityAction from '../../../../stores/quantity/quantity.actions';
import { QuantityModel } from '../model/quantity.model';
import { Console } from 'console';
import { tap } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-quantitylist',
  templateUrl: './quantitylist.component.html',
  styleUrls: ['./quantitylist.component.scss']
})
export class QuantitylistComponent implements OnInit {

  quantityData$: Observable<QuantityModel[]>;
  getAll: any;
 

constructor(
    private quantityService: QuantityService,
     private router: Router, 
     private store: Store<MainState>, private toastr: ToastrService,
    ) {}

    ngOnInit(): void{

      this.getQuantitydata();
      
    }
    
    getQuantitydata(){
      //Get data dispatching from action
      this.store.dispatch(QuantityAction.listQuantity());
      this.quantityData$ = this.store.pipe(select(QuantitySelector.selectQuantities));
      this.quantityData$.subscribe((qData: any)=>{
        this.getAll = qData;
        console.log('All Data', this.getAll);
      })
    }



 
  

 

}
