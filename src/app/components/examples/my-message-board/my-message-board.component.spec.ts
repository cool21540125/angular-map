import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyMessageBoardComponent } from './my-message-board.component';

describe('MyMessageBoardComponent', () => {
  let component: MyMessageBoardComponent;
  let fixture: ComponentFixture<MyMessageBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyMessageBoardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyMessageBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
