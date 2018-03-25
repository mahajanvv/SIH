import { TestBed, inject } from '@angular/core/testing';

import { PolicevalidateService } from './policevalidate.service';

describe('PolicevalidateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PolicevalidateService]
    });
  });

  it('should be created', inject([PolicevalidateService], (service: PolicevalidateService) => {
    expect(service).toBeTruthy();
  }));
});
