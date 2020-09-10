import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionheaderComponent } from './actionheader.component';

describe('ActionheaderComponent', () => {
  let component: ActionheaderComponent;
  let fixture: ComponentFixture<ActionheaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActionheaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
