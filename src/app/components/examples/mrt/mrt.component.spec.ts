import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MrtComponent } from './mrt.component';

describe('MrtComponent', () => {
  let component: MrtComponent;
  let fixture: ComponentFixture<MrtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MrtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MrtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
