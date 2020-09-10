import { createFeatureSelector, createSelector, ActionReducerMap } from '@ngrx/store';
import * as QuantityReducer from './quantity.reducer';

//Make state interface
export interface State{
    quantity: QuantityReducer.QuantityState;
};

//Connect with reducer ActionReducerMap
export const reducers: ActionReducerMap<State> = {
    quantity: QuantityReducer.reducer,
};

//Create Feature selector & Select these
export const selectQuantityfeature = createFeatureSelector<QuantityReducer.QuantityState>(
    QuantityReducer.quantityFeatureKey
);

//Selecting only entity or other state (Create)
export const selectQuantityEntities = createSelector(
    selectQuantityfeature,
    (QuantityReducer) => QuantityReducer.entities
);

//Single Value Id
export const currentSingleQuantityId = createSelector(
    selectQuantityfeature,
    //Coming from reducer selector which is exported
    QuantityReducer.getSelectedQuantityId
);

//Single quantity Value based id
export const singleQuantityBasedOnId = createSelector(
    selectQuantityfeature,
    currentSingleQuantityId,
    (state, pid) =>{
    //console.log('state',state,"id",pid);
    return state.entities[pid]
    } 

);

export const quantityTest = createSelector(
    selectQuantityfeature, 
    QuantityReducer.selectIds

);

//get state and  convert entity object into array
export const quantityTestAll = createSelector(
    selectQuantityEntities, (entities) =>
  Object.keys(entities).map((k) => entities[k])
);

//same as converting to array like upper function
//Get all data
export const selectQuantities = createSelector(
    
    selectQuantityfeature,
   
    /* (e)=>{
        console.log('Selector->>',e)
        return e;
    }, */
    
    QuantityReducer.selectAll,
);


