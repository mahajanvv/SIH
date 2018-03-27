import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowcrimemapComponent } from './showcrimemap.component';

describe('ShowcrimemapComponent', () => {
  let component: ShowcrimemapComponent;
  let fixture: ComponentFixture<ShowcrimemapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowcrimemapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowcrimemapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
