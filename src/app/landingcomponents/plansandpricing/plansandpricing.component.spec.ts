import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlansandpricingComponent } from './plansandpricing.component';

describe('PlansandpricingComponent', () => {
  let component: PlansandpricingComponent;
  let fixture: ComponentFixture<PlansandpricingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlansandpricingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlansandpricingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
