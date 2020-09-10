import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductleftpanelComponent } from './productleftpanel.component';

describe('ProductleftpanelComponent', () => {
  let component: ProductleftpanelComponent;
  let fixture: ComponentFixture<ProductleftpanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductleftpanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductleftpanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
