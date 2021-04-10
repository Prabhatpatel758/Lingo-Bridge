import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachwithusComponent } from './teachwithus.component';

describe('TeachwithusComponent', () => {
  let component: TeachwithusComponent;
  let fixture: ComponentFixture<TeachwithusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeachwithusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeachwithusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
