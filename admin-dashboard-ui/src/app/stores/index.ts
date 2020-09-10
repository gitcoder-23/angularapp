import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { SettingsReducer, SettingsState } from './settings/settings.reducer';
import {ProductState, ProductReducer} from './product/product.reducer';
import {QuantityState, QuantityReducer} from './quantity/quantity.reducer';


export interface MainState {
  settings: SettingsState;
  product: ProductState;
  quantity: QuantityState;
 

}

export const reducers: ActionReducerMap<MainState> = {
  settings: SettingsReducer,
  product: ProductReducer,
  quantity: QuantityReducer,
  
  
};


export const metaReducers: MetaReducer<MainState>[] = !environment.production ? [] : [];
