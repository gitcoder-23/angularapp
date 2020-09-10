import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from "@ngrx/entity";
import { ProductModel } from '../../views/theme/productinfo/model/product.model';


import * as ProductAction from './product.actions';




export const productFeatureKey = 'product';


//For Entity
export interface ProductState extends EntityState<ProductModel> {
  error: any;
  currentSelectedProduct: number;
}
//Adding & create entityadapter for entity if created
export const adapter: EntityAdapter<ProductModel> = createEntityAdapter<ProductModel>();

//Making initial state using Entity and entityadapter that is get
export const initialState: ProductState = adapter.getInitialState({
  error: undefined,
  currentSelectedProduct: null,
});

//Set all values in reducer
export const ProductReducer = createReducer(
  initialState,
  

  //Get all date from db
  on(ProductAction.loadProductsSucess, (state, action)=>{
    return adapter.setAll(action.products, state);
    /* console.log('Before Reducer',action);
    var x = adapter.setAll(action.products, state);
    console.log('After reducer return', x);
    console.log('State>', state)
    return x; */
  }),

  //Creating or inserting data into db & success
  on(ProductAction.createProductSuccess, (state, action)=>{
    return adapter.addOne(action.product, state);
  }),

  //Set error if any error occur during insert
  on(ProductAction.createProductFail, (state, action)=>({
    ...state,
    error: action.error,
    
  })),

  //Set id to state using single-data
  on(ProductAction.loadProduct, (state, action)=>{
    //console.log('Reducer->', action.productId);
    return {
      ...state,
      currentSelectedProduct: action.productId,
      
       
      
    };
  }),

  //Update single data into db and state success
  on(ProductAction.updateProductSuccess, (state, action)=>{
    return adapter.updateOne(action.product, state);
  }),

  //Delete data & Success from db & Store
  on(ProductAction.deleteProductSuccess, (state, action)=>{
    return adapter.removeOne(action.pid, state);
  }),

  //For delete Error or fail
  on(ProductAction.deleteProductFail, (state, action)=>({
    ...state,
    error: action.error,
  })),


);

//getting and exporting state to access from another file Selector
export const getSelectedProductId = (state: ProductState) => {
  return state.currentSelectedProduct;
}

//Reducer exported & Add to index.js
export function reducer(state: ProductState, action: Action) {
  return ProductReducer(state, action);
}

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors(); //Take selector from new selector file


