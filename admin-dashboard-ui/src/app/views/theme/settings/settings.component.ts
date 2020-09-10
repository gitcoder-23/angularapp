import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

import { SettingsService } from '../../../services/settings.service';
import { Settings } from './model/settings.model';
import { from, Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';
//NGRX Directory
import { Store, select } from "@ngrx/store";
import { MainState } from '../../../stores/index';//Reducer add state file
import * as SettingsAction from '../../../stores/settings/settings.actions';
import * as SettingsSelector from '../../../stores/settings/settings.selectors';

@Component({
  templateUrl: 'settings.component.html'
})
export class SettingsComponent implements OnInit {

 //For Validation
  socialInfoForm: FormGroup;
  submitted = false;

  //Taken variable from form
  address: string;
  email: string;
  supportPhone: string;
  altPhone: string;
  facebookUrl: string;
  twitterUrl: string;
  youtubeUrl: string;
  instagramUrl: string;
  sid: number;//For update
  //Declare object
  //settingsData$: Observable<Settings[]>;
  settingsData$:any;
  
  
  constructor(public formBuilder: FormBuilder, 
              private router: Router, 
              private route: ActivatedRoute,// For Edit data
              private httpClient: HttpClient, private toastr: ToastrService,
              private settingsService: SettingsService, 
              private store: Store<MainState> ) { }

  ngOnInit() {

    this.socialInfoValidation();
    this.getSettingsData();
   
    //Get Data of settings
     

 }
  //Get List value from actions and selectors with service using dispatch
  getSettingsData(){
    this.store.dispatch(SettingsAction.loadSettings()); 
    const settingsData = this.store.select(
      
      SettingsSelector.selectSettings
    )
    settingsData.subscribe(currentSettings => {
      console.log('sty Value->', currentSettings);
      if(currentSettings[0]){
       
        this.sid = currentSettings[0].sid;
       
        this.socialInfoForm.patchValue({
         
         address: currentSettings[0].address,
          email: currentSettings[0].email,
          supportPhone: currentSettings[0].supportPhone,
          altPhone: currentSettings[0].altPhone,
          facebookUrl: currentSettings[0].facebookUrl,
          twitterUrl: currentSettings[0].twitterUrl,
          youtubeUrl: currentSettings[0].youtubeUrl,
          instagramUrl: currentSettings[0].instagramUrl,
          sid: currentSettings[0].sid 
        })
      }
    })
    
  }


 socialInfoValidation(){

  this.socialInfoForm = this.formBuilder.group({
    address: ['', Validators.required],
    email: ['', [Validators.required, Validators.pattern('^[^@\\s]+@[^@\\s]+\\.[^@\\s]+$')]],
    supportPhone: ['', [Validators.required, Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')]],
    altPhone: ['', [ Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')]],
    facebookUrl: [],
    twitterUrl: [],
    youtubeUrl: [],
    instagramUrl: [],
    sid: null
   });

 }
 
  get socialVal() {
  return this.socialInfoForm.controls;
  }
  
  socialInfo(){
  this.submitted = true;
  // console.log(this.submitted)
  if (this.socialInfoForm.invalid) {
  return;
  }
  //alert('form fields are validated successfully!');
      const updatedSettings = {
        address: this.socialInfoForm.get('address').value,
        email: this.socialInfoForm.get('email').value,
        support_phone: this.socialInfoForm.get('supportPhone').value,
        alt_phone: this.socialInfoForm.get('altPhone').value,
        facebook_url: this.socialInfoForm.get('facebookUrl').value,
        twitter_url: this.socialInfoForm.get('twitterUrl').value,
        youtube_url: this.socialInfoForm.get('youtubeUrl').value,
        instagram_url: this.socialInfoForm.get('instagramUrl').value,
        sid: this.socialInfoForm.get('sid').value
      };

      const sid = this.socialInfoForm.get('sid').value;
      //console.log('Main Id-->', this.sid);
      //console.log('Update Data=>', updatedSettings);
     
      this.store.dispatch(SettingsAction.updateSetting({settings:updatedSettings, sid:this.sid}));
       //Alert msg
       this.toastr.success('Settings updated successfully', 'Success', {
        timeOut: 1000 * 2,
        progressBar: true

      })
  
  
  }


 //Numeric accepted
numberOnly(event): boolean {
  
  const charCode = (event.which) ? event.which : event.keyCode;
  if (charCode > 31 && (charCode < 48 || charCode > 57)) { 
    return false;
  }
  
    return true;
  
}
 

}


