import { createFeatureSelector, createSelector, ActionReducerMap } from '@ngrx/store';
import * as fromSettings from '../settings/settings.reducer';

//make state interface
export interface State{
    settings: fromSettings.SettingsState;
};

//Connect with reducer
export const reducers: ActionReducerMap<State> = {
    settings: fromSettings.reducer,
};

//Selecting feature selector
export const selectSettingsFeature = 
createFeatureSelector<fromSettings.SettingsState>(
    fromSettings.settingsFeatureKey
);

//Selecting only entity or other state (Create)
export const selectSettingsEntities = createSelector(
    selectSettingsFeature,
    (fromSettings) => fromSettings.entities
);

//Single Value Id
export const currentSingleSettingsId = createSelector(
    selectSettingsFeature,
    //Coming from reducer selector which is exported
    fromSettings.getSelectdSettingsId
);
//Single Settings Value based id
export const singleSettingsBasedOnId = createSelector(
    selectSettingsFeature,
    currentSingleSettingsId,
    (state, id) => state.entities[id]

);

export const Test = createSelector(
    selectSettingsFeature, 
    fromSettings.selectIds

);

//get state and  convert entity object into array
export const TestAll = createSelector(
    selectSettingsEntities, (entities) =>
  Object.keys(entities).map((k) => entities[k])
);

//same as converting to array like upper function
export const selectSettings = createSelector(
    selectSettingsFeature,
    fromSettings.selectAll
);


















































































