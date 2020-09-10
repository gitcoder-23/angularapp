import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NodatafoundComponent } from './nodatafound.component';

describe('NodatafoundComponent', () => {
  let component: NodatafoundComponent;
  let fixture: ComponentFixture<NodatafoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NodatafoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NodatafoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
