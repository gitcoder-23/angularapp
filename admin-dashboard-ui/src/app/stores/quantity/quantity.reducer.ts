import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from "@ngrx/entity";
import { QuantityModel } from '../../views/theme/quantity/model/quantity.model';


import * as QuantityAction from './quantity.actions';

export const quantityFeatureKey = 'quantity';

//For Entity
export interface QuantityState extends EntityState<QuantityModel> {
  error: any;
  currentSelectedQuantity: number;
}
//Adding & create entityadapter for entity if created
export const adapter: EntityAdapter<QuantityModel> = createEntityAdapter<QuantityModel>();

//Making initial state using Entity and entityadapter that is get
export const initialState: QuantityState = adapter.getInitialState({
  error: undefined,
  currentSelectedQuantity: null,
});


//Set all values in reducer
export const QuantityReducer = createReducer(
  initialState,
  

  //Get all date from db
  on(QuantityAction.listQuantitySuccess, (state, action)=>{
    return adapter.setAll(action.quantities, state);
    /* console.log('Before Reducer',action);
    var x = adapter.setAll(action.quantities, state);
    console.log('After reducer return', x);
    console.log('State>', state)
    return x; */
  }),

  //Creating or inserting data into db & success
  on(QuantityAction.createQuantitySuccess, (state, action)=>{
    return adapter.addOne(action.quantity, state);
  }),

  //Set error if any error occur during insert
  on(QuantityAction.createQuantityFail, (state, action)=>({
    ...state,
    error: action.error,
    
  })),

  //Set id to state using single-data
  on(QuantityAction.loadQuantity, (state, action)=>{
    //console.log('Reducer->', action.quantityId);
    return {
      ...state,
      currentSelectedQuantity: action.quantityId,
      
       
      
    };
  }),

  //Update single data into db and state success
  on(QuantityAction.updateQuantitySuccess, (state, action)=>{
    return adapter.updateOne(action.quantity, state);
  }),

  //Delete data & Success from db & Store
  on(QuantityAction.deleteQuantitySuccess, (state, action)=>{
    return adapter.removeOne(action.pid, state);
  }),

  //For delete Error or fail
  on(QuantityAction.deleteQuantityFail, (state, action)=>({
    ...state,
    error: action.error,
  })),


);

//getting and exporting state to access from another file Selector
export const getSelectedQuantityId = (state: QuantityState) => {
  return state.currentSelectedQuantity;
}

//Reducer exported & Add to index.js
export function reducer(state: QuantityState, action: Action) {
  return QuantityReducer(state, action);
}

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors(); //Take selector from new selector file

