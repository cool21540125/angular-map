import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UdfpowerComponent } from './udfpower.component';

describe('UdfpowerComponent', () => {
  let component: UdfpowerComponent;
  let fixture: ComponentFixture<UdfpowerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UdfpowerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UdfpowerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
