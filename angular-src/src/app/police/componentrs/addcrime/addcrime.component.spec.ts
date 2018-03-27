import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcrimeComponent } from './addcrime.component';

describe('AddcrimeComponent', () => {
  let component: AddcrimeComponent;
  let fixture: ComponentFixture<AddcrimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddcrimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddcrimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
