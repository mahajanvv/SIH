import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddvictimComponent } from './addvictim.component';

describe('AddvictimComponent', () => {
  let component: AddvictimComponent;
  let fixture: ComponentFixture<AddvictimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddvictimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddvictimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
