import {
  Action,
  createReducer,
  on,
  createFeatureSelector,
  createSelector,
  State,
} from "@ngrx/store";

import { EntityState, EntityAdapter, createEntityAdapter } from "@ngrx/entity";

import * as SettingsAction from "./settings.actions";
import { Settings } from "../../views/theme/settings/model/settings.model";


export const settingsFeatureKey = "settings";

//For entity
export interface SettingsState extends EntityState<Settings> {
  error: any;
  currentSelectedSettings: number;
}

//Adding & create entityadapter
export const adapter: EntityAdapter<Settings> = createEntityAdapter<Settings>();

//Making initial state using Entity and entityadapter
export const initialState: SettingsState = adapter.getInitialState({
  error: undefined,
  currentSelectedSettings: null,
});

//Set all values in reducer
export const SettingsReducer = createReducer(
  initialState,

  //Get all date from db
  on(SettingsAction.loadSettingsSuccess, (state, action) => {
    return adapter.addAll(action.settings, state);
  }),

  //Creating or inserting data into db & success
  on(SettingsAction.createSettingSuccess, (state, action) => {
    return adapter.addOne(action.settings, state);
  }),

  //Set error if any error occur during insert
  on(SettingsAction.createSettingFailure, (state, action) => ({
    ...state,
    error: action.error,
  })),

  //Set id to state using single-data
  on(SettingsAction.loadSetting, (state, action) => {
    return {
      ...state,
      currentSelectedSettings: action.settingsId,
    };
  }),

  //Update single data into db and state success
  on(SettingsAction.updateSettingSuccess, (state, action) => {
    return adapter.updateOne(action.settings, state);
  }),

  //Delete data & Success from db & Store
  on(SettingsAction.daleteSettingSuccess, (state, action) => {
    return adapter.removeOne(action.id, state);
  }),

  //For delete Error
  on(SettingsAction.daleteSettingFailure, (state, action) => ({
    ...state,
    error: action.error,
  }))
);

//getting and exporting state to access from another file Selector
export const getSelectdSettingsId = (state: SettingsState) => {
  return state.currentSelectedSettings;
};

//Reducer exported & Add to index.js
export function reducer(state: SettingsState, action: Action) {
  return SettingsReducer(state, action);
}

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors(); //Take selector from new selector file
