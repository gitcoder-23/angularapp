import { Injectable } from '@angular/core';
import { Actions, Effect, ofType, createEffect, act } from '@ngrx/effects';
import * as settingsAction from "./settings.actions";
import { SettingsService } from '../../services/settings.service';
import { mergeMap, map, catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class SettingsEffects {

  //Extra Date Store for a few moment
  HoldInsert: any = undefined;
  HoldUpdate: any = undefined;
  HoldDelete: any = undefined;

  constructor(private actions$: Actions,
    private settingsService: SettingsService) {}

  //All Data List
  loadSettings$ = createEffect(() => this.actions$.pipe(
    ofType(settingsAction.loadSettings),
    mergeMap(() => this.settingsService.getSettings()
      .pipe(
        map(settings => (settingsAction.loadSettingsSuccess({ settings })),
          catchError(error => of(settingsAction.loadSettingsFailure({ error }))))
      ))
    ));

  //Insert Data
  insertSetting$ = createEffect(() => this.actions$.pipe(
    ofType(settingsAction.createSetting),
    tap((action) => {
      this.HoldInsert = action.settings;
    }),
    mergeMap((action) => this.settingsService.addSettings(action.settings).pipe(
      map((settings, action) => {
        return settingsAction.createSettingSuccess({ settings: this.HoldInsert })
      }),
      catchError(error => of(settingsAction.createSettingFailure({ error }))),
    )),
  ));

  //Update Data

  updateSetting$ = createEffect(() => this.actions$
  .pipe(
    ofType(settingsAction.updateSetting),
    tap((action) => {
      this.HoldUpdate = action;
    }),
    mergeMap((action) => this.settingsService.updateSettings(action.sid, action.settings).pipe(
      map((settings) => {
        return settingsAction.updateSettingSuccess({
          settings: {
            id: this.HoldUpdate.id,
            changes: this.HoldUpdate.settings
          }
        });
      }),
      catchError(error => of(settingsAction.updateSettingFailure({ error })))
    ))
  ));
//Delete Data
  deleteSetting$ = createEffect(() => this.actions$.pipe(
    ofType(settingsAction.daleteSetting),
    tap((action)=>{
      this.HoldDelete = action.id;
    }),
    mergeMap((action)=>this.settingsService.deleteSettings(action.id).pipe(
      map((settings)=>{
        return settingsAction.daleteSettingSuccess({id:this.HoldDelete})
      }),
      catchError(error => of(settingsAction.daleteSettingFailure({error})))
    ))
  ));
 

  

}
