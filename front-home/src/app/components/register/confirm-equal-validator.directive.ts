import { Validator, NG_VALIDATORS, AbstractControl } from '@angular/forms';
import { Directive, Input } from '@angular/core';


@Directive({

    selector: '[appConfirmEqualValidatorDirective]',
    providers: [{

        provide: NG_VALIDATORS,
        useExisting: ConfirmEqualValidatorDirective,
        multi: true

    }]
})

export class ConfirmEqualValidatorDirective implements Validator{

    @Input() appConfirmEqualValidatorDirective: string;

    validate( control: AbstractControl ): {[Key:string]: any} | null {

        const controlToCompare = control.parent.get(this.appConfirmEqualValidatorDirective);
        if(controlToCompare && controlToCompare.value !== control.value){

            return {'notEqual': true };
        }

        return null;

    }


} 