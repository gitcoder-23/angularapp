import { Action, createAction, props } from '@ngrx/store';
import { Settings } from '../../views/theme/settings/model/settings.model'
import { Update } from '@ngrx/entity'; //For Update 'Entity used'

//Load settings list
export const loadSettings = createAction(
  '[Settings] Load Settings',
);

export const loadSettingsSuccess = createAction(
  '[Settings] Load Settings Success',
  props<{ settings: any }>()
);

export const loadSettingsFailure = createAction(
  '[Settings] Load Settings Failure',
  props<{ error: any }>()
);

//Load single settings data
export const loadSetting = createAction(
  '[Settings] Load Setting',
  props<{ settingsId: number }>()
);

/* export const loadSettingSuccess = createAction(
  '[Settings] Load Setting Success',
  props<{ settings: any }>()
);

export const loadSettingFailure = createAction(
  '[Settings] Load Setting Failure',
  props<{ error: any }>()
); */

//Load create settings 
export const createSetting = createAction(
  '[Settings] Create Setting',
  props<{ settings: any }>()
);

export const createSettingSuccess = createAction(
  '[Settings] Create Setting Success',
  props<{ settings: any }>()
);

export const createSettingFailure = createAction(
  '[Settings] Create Setting Failure',
  props<{ error: any }>()
);

//Load update settings 
export const updateSetting = createAction(
  '[Settings] Update Setting',
  props<{ settings: any; sid: number }>()
);

export const updateSettingSuccess = createAction(
  '[Settings] Update Setting Success',
  props<{ settings: Update<Settings> }>() 
  //'Update'Taken from '@ngrx/entity' file and 'Settings' taken from model
);

export const updateSettingFailure = createAction(
  '[Settings] Update Setting Failure',
  props<{ error: any }>()
);

//Load delete settings 
export const daleteSetting = createAction(
  '[Settings] Delete Setting',
  props<{ id: any }>()
);

export const daleteSettingSuccess = createAction(
  '[Settings] Delete Setting Success',
  props<{ id: any }>()
);

export const daleteSettingFailure = createAction(
  '[Settings] Delete Setting Failure',
  props<{ error: any }>()
);


