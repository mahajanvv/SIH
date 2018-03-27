import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatecrimeComponent } from './updatecrime.component';

describe('UpdatecrimeComponent', () => {
  let component: UpdatecrimeComponent;
  let fixture: ComponentFixture<UpdatecrimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatecrimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatecrimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
