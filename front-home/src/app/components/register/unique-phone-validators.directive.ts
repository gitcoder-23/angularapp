import { Directive } from '@angular/core';
import { AsyncValidator, AbstractControl, ValidationErrors, NG_ASYNC_VALIDATORS } from '@angular/forms';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { UserService } from './user.service';

@Directive({
  selector: '[uniquePhone]',
  providers: [{ provide: NG_ASYNC_VALIDATORS, useExisting: UniquePhoneValidatorsDirective, multi: true }]
})
export class UniquePhoneValidatorsDirective implements AsyncValidator {
  users: any;

  constructor(private userService: UserService) { }
  validate(c: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {

    return this.userService.getUserByPhone(c.value).pipe(
      map(users => {
        return users && users.length > 0 ? { 'uniquePhone': true } : null;
      })
    );
  }

}
