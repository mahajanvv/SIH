import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrimestatComponent } from './crimestat.component';

describe('CrimestatComponent', () => {
  let component: CrimestatComponent;
  let fixture: ComponentFixture<CrimestatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrimestatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrimestatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
