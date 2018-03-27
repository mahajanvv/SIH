import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetcrimeComponent } from './getcrime.component';

describe('GetcrimeComponent', () => {
  let component: GetcrimeComponent;
  let fixture: ComponentFixture<GetcrimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetcrimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetcrimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
