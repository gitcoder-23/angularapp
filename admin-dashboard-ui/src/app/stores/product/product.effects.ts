import { Injectable } from '@angular/core';
import { Actions, Effect, ofType, createEffect, act } from '@ngrx/effects';
import * as ProductAction from './product.actions';
import { ProductService } from '../../services/product.service';
import { mergeMap, map, catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';



@Injectable()
export class ProductEffects {

 //Extra Date Store for a few moment
 HoldInsert: any = undefined;
 HoldUpdate: any = undefined;
 HoldDelete: any = undefined;

  constructor(private actions$: Actions,
    private productService: ProductService) {}

    //All Data List
  loadProducts$ = createEffect(() => this.actions$.pipe(
    ofType(ProductAction.loadProducts),
    mergeMap(() => this.productService.getProducts()
      .pipe(
        map(products =>{
          //console.log("effect->>",products)
          return ProductAction.loadProductsSucess({ products: products })
        }),
          catchError(error => of(ProductAction.loadProductsFail({ error })))
      ))
    ));

  //Insert Data
  insertProduct$ = createEffect(() => this.actions$.pipe(
    ofType(ProductAction.createProduct),
    tap((action) => {
      //console.log('Product & Action', action);
      this.HoldInsert = action.product;
    }),
    mergeMap((action) => this.productService.addProduct(action.product).pipe(
      map((product, action) => {
        //console.log('Product & Action', product, action);
        return ProductAction.createProductSuccess({ product: this.HoldInsert })
      }),
      catchError(error => of(ProductAction.createProductFail({ error }))),
    )),
  )); 
  
  //Update Data
 updateProduct$ = createEffect(() => this.actions$
  .pipe(
    ofType(ProductAction.updateProduct),
    tap((action) => {
      this.HoldUpdate = action;
    }),
    mergeMap((action) => this.productService.updateProduct(action.pid, action.product).pipe(
      map((product) => {
        return ProductAction.updateProductSuccess({
          product: {
            id: this.HoldUpdate.id,
            changes: this.HoldUpdate.product
          }
        });
      }),
      catchError(error => of(ProductAction.updateProductFail({ error })))
    ))
  ));

//Delete Data
deleteProduct$ = createEffect(() => this.actions$.pipe(
  ofType(ProductAction.deleteProduct),
  tap((action)=>{
    this.HoldDelete = action.pid;
  }),
  mergeMap((action)=>this.productService.deleteProduct(action.pid).pipe(
    map((product)=>{
      //console.log('Del-Product & Action', product, action);
      return ProductAction.deleteProductSuccess({pid:this.HoldDelete})
    }),
    catchError(error => of(ProductAction.deleteProductFail({error})))
  ))
));


}
