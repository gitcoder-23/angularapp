import { Action, createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { QuantityModel } from '../../views/theme/quantity/model/quantity.model';

//List of data
export const listQuantity = createAction(
  '[Quantity List] List Quantity',
);

export const listQuantitySuccess = createAction(
  '[Quantity List Effect] List Quantity Success',
  props<{quantities:any}> ()
);

export const listQuantityFail = createAction(
  '[Quantity List Effect] List Quantity Fail',
  props <{error:any}> ()
)

//Single data
export const loadQuantity = createAction(
  '[Quantity] Load Quantity',
  props< {quantityId:number} > ()
);

//Create
export const createQuantity = createAction(
  '[Quantity] Create Quantity',
  props< {quantity:any} >()
);

export const createQuantitySuccess = createAction(
  '[Quantity] Create Quantity Success',
  props< {quantity:any} >()
);

export const createQuantityFail = createAction(
  '[Quantity] Create Quantity Fail',
  props< {error:any} >()
);

//Update
export const updateQuantity = createAction(
  '[Quantity] Update Quantity',
  props<{quantity:any, pid:any}>()
);

export const updateQuantitySuccess = createAction(
  '[Quantity] Update Quantity Success',
  props<{quantity:Update<QuantityModel>}>()
  //'Update'Taken from '@ngrx/entity' file and 'QuantityModel' taken from model
);

export const updateQuantityFail = createAction(
  '[Quantity] Update Quantity Fail',
  props<{error:any}>()
);

//Delete
export const deleteQuantity = createAction(
  '[Quantity] Delete Quantity',
  props<{pid:number}>()
);

export const deleteQuantitySuccess = createAction(
  '[Quantity] Delete Quantity',
  props<{pid:number}>()
);

export const deleteQuantityFail = createAction(
  '[Quantity] Delete Quantity',
  props<{error:any}>()
);




