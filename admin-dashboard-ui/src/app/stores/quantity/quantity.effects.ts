import { Injectable } from '@angular/core';
import { Actions, Effect, ofType, createEffect, act } from '@ngrx/effects';
import * as QuantityAction from './quantity.actions';
import { QuantityService } from '../../services/quantity.service';
import { mergeMap, map, catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';



@Injectable()
export class QuantityEffects {

 //Extra Date Store for a few moment
 HoldInsert: any = undefined;
 HoldUpdate: any = undefined;
 HoldDelete: any = undefined;

  constructor(private actions$: Actions,
    private quantityService: QuantityService) {}


  //All Data List
  listQuantity$ = createEffect(() => this.actions$.pipe(
    ofType(QuantityAction.listQuantity),
    mergeMap(() => this.quantityService.getProductsQuantity()
      .pipe(
        map(quantities =>{
          //console.log("effect->>",quantities)
          return QuantityAction.listQuantitySuccess({ quantities: quantities })
        }),
          catchError(error => of(QuantityAction.listQuantityFail({ error })))
      ))
    ));

  //Insert Data
  /* insertQuantity$ = createEffect(() => this.actions$.pipe(
    ofType(QuantityAction.),
    tap((action) => {
      //console.log('Product & Action', action);
      this.HoldInsert = action.product;
    }),
    mergeMap((action) => this.productService.addProduct(action.product).pipe(
      map((product, action) => {
        //console.log('Product & Action', product, action);
        return QuantityAction.createProductSuccess({ product: this.HoldInsert })
      }),
      catchError(error => of(QuantityAction.createProductFail({ error }))),
    )),
  )); */ 
  
  //Update Data
 updateQuantity$ = createEffect(() => this.actions$
  .pipe(
    ofType(QuantityAction.updateQuantity),
    tap((action) => {
      this.HoldUpdate = action;
    }),
    mergeMap((action) => this.quantityService.updateQuantity(action.pid, action.quantity).pipe(
      map((quantity) => {
        return QuantityAction.updateQuantitySuccess({
          quantity: {
            id: this.HoldUpdate.id,
            changes: this.HoldUpdate.quantity
          }
        });
      }),
      catchError(error => of(QuantityAction.updateQuantityFail({ error })))
    ))
  ));



}
