import { createFeatureSelector, createSelector, ActionReducerMap } from '@ngrx/store';
import * as ProductReducer from './product.reducer';

//Make state interface
export interface State{
    product: ProductReducer.ProductState;
};

//Connect with reducer
export const reducers: ActionReducerMap<State> = {
    product: ProductReducer.reducer,
};

//Create Feature selector & Select these
export const selectProductfeature = createFeatureSelector<ProductReducer.ProductState>(
    ProductReducer.productFeatureKey
);

//Selecting only entity or other state (Create)
export const selectProductEntities = createSelector(
    selectProductfeature,
    (ProductReducer) => ProductReducer.entities
);

//Single Value Id
export const currentSingleProductId = createSelector(
    selectProductfeature,
    //Coming from reducer selector which is exported
    ProductReducer.getSelectedProductId
);

//Single Product Value based id
export const singleProductBasedOnId = createSelector(
    selectProductfeature,
    currentSingleProductId,
    (state, pid) =>{
    console.log('state',state,"id",pid);
    return state.entities[pid]
    } 

);

export const productTest = createSelector(
    selectProductfeature, 
    ProductReducer.selectIds

);

//get state and  convert entity object into array
export const productTestAll = createSelector(
    selectProductEntities, (entities) =>
  Object.keys(entities).map((k) => entities[k])
);

//same as converting to array like upper function
//Get all data
export const selectProducts = createSelector(
    
    selectProductfeature,
   
    /* (e)=>{
        console.log('Selector->>',e)
        return e;
    }, */
    
    ProductReducer.selectAll,
);

