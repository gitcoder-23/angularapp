import { Action, createAction, props } from '@ngrx/store';
import { ProductModel } from '../../views/theme/productinfo/model/product.model'
import { create } from 'domain';
import { Update } from '@ngrx/entity';

//List of data
export const loadProducts = createAction(
  '[Product List] Load Products',
);

export const loadProductsSucess = createAction(
  '[Product List Effect] Load Products Success',
  props<{products:any}> ()
);

export const loadProductsFail = createAction(
  '[Product List Effect] Load Products Fail',
  props <{error:any}> ()
)

//Single data
export const loadProduct = createAction(
  '[Product] Load Product',
  props< {productId:number} > ()
);

//Create
export const createProduct = createAction(
  '[Product] Create Product',
  props< {product:any} >()
);

export const createProductSuccess = createAction(
  '[Product] Create Product Success',
  props< {product:any} >()
);

export const createProductFail = createAction(
  '[Product] Create Product Fail',
  props< {error:any} >()
);

//Update
export const updateProduct = createAction(
  '[Product] Update Product',
  props<{product:any, pid:any}>()
);

export const updateProductSuccess = createAction(
  '[Product] Update Product Success',
  props<{product:Update<ProductModel>}>()
  //'Update'Taken from '@ngrx/entity' file and 'productModel' taken from model
);

export const updateProductFail = createAction(
  '[Product] Update Product Fail',
  props<{error:any}>()
);

//Delete
export const deleteProduct = createAction(
  '[Product] Delete Product',
  props<{pid:number}>()
);

export const deleteProductSuccess = createAction(
  '[Product] Delete Product',
  props<{pid:number}>()
);

export const deleteProductFail = createAction(
  '[Product] Delete Product',
  props<{error:any}>()
);


