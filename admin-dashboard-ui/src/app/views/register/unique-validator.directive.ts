import { Directive } from '@angular/core';
import { AsyncValidator, AbstractControl, ValidationErrors, NG_ASYNC_VALIDATORS, AsyncValidatorFn } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { RegService } from './service/reg.service';


@Directive({
    selector: '[addUniqueValidatorDirective]',
    providers: [{ provide: NG_ASYNC_VALIDATORS, useExisting: UniqueValidatorDirective, multi: true }]
    
})
export class UniqueValidatorDirective   implements AsyncValidator {

    constructor(private regService: RegService) { }

    validate(c: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
        
        return this.regService.getUserByEmail(c.value).pipe(
            map((users:any) => {
                
                
                return users.email ? { 'addUniqueValidatorDirective': true } : null; //data geting as object
                

            })
           
        );
    }
    



}

@Directive({
    selector: '[addUniquePhoneValidatorDirective]',
    providers: [{ provide: NG_ASYNC_VALIDATORS, useExisting: uniquePhoneValidator, multi: true }]
    
})



export class uniquePhoneValidator implements AsyncValidator {

    constructor(private regService: RegService) { }

    validate(c: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
        
        return this.regService.getUserByPhone(c.value).pipe(
            /*  tap(phones =>{
                console.log("phone data", phones);
               return phones.user_present ? { 'addUniquePhoneValidatorDirective': true } : null; //data geting as single object

            }),  */
            map((phones:any) => {
                //console.log("in directive", phones);

                return phones.user_present ? { 'addUniquePhoneValidatorDirective': true } : null; //data geting as single object
               //return phones && phones.length > 0 ? { 'addUniquePhoneValidatorDirective': true } : null; //data geting as array
            }), 
            

           
        );
    }



}




/* export function uniquePhoneValidator(regService: RegService): AsyncValidatorFn {
    console.log(regService);
    return (c: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {
        console.log(c);
        return regService.getUserByPhone(c.value).pipe(
            map((phones : any) => {
                
                return phones && phones.length > 0 ? { 'addUniquePhoneValidatorDirective': true } : null; //data geting as array
                
            }),
            tap(phone => {
                console.warn("incoming",phone)
            })
        );
    };

} */

