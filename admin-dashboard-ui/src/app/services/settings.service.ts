import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  

  constructor(private http: HttpClient ) { }

  // Settings api start

  //Add
  addSettings(settingsData: any){
    return this.http.post('api/addsettings', settingsData);
  }

  //Get List
  getSettings(){
    return this.http.get('api/getsettings');
  }

  //Edit
  updateSettings(sid: number, settings){
    
    return this.http.put('api/putsettings/'+sid, settings);
  }

  //Single get data for update
  getSingleSettings(sid: number){
    return this.http.get('api/singlesettings/'+sid);
  }

  //Delete data
  deleteSettings(sid: Number){
    return this.http.delete('api/delsettings/'+sid);
  }


}
