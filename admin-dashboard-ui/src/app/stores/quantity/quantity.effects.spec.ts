import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { QuantityEffects } from './quantity.effects';

describe('QuantityEffects', () => {
  let actions$: Observable<any>;
  let effects: QuantityEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        QuantityEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(QuantityEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
