import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators, FormBuilder } from "@angular/forms";

@Component({
  templateUrl: "banneradd.component.html",
})
export class BanneraddComponent implements OnInit {

  submitted = false;
  bannerImageForm: FormGroup;

  ngOnInit() {

    this.bannerValidation();
  }

  constructor(public formBuilder: FormBuilder ) {}

  /*******Form Validation reactive */
  bannerValidation(){

    this.bannerImageForm = this.formBuilder.group({
      bannerImg: ['', Validators.required]
  
     });
  
   }
   
    get bannerval() {
    return this.bannerImageForm.controls;
    }
    
    bannerSubmit(){
    this.submitted = true;
    // console.log(this.submitted)
    if (this.bannerImageForm.invalid) {
    return;
    }
    alert('form fields are validated successfully!');
    }
  

  /* onSubmit() {
    alert(JSON.stringify(this.myInfo.value));
    alert("Image upload successfully");
  } */

  /*******Form Validation reactive end */

  

  urls = [];

  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      var filesAmount = event.target.files.length;
      for (let i = 0; i < filesAmount; i++) {
        var reader = new FileReader();

        reader.onload = (event: any) => {
          console.log(event.target.result);
          this.urls.push(event.target.result);
        };

        reader.readAsDataURL(event.target.files[i]);
      }
    }
  }

  /* selectFiles(event){

    if(event.target.files){
      for(var i = 0; i< File.length; i++){
        var reader = new FileReader();

        reader.readAsDataURL(event.target.files[i])
        reader.onload = (event:any) => {
          this.urls.push(event.target.result)
        }
      }
    }
  }*/

  
}
