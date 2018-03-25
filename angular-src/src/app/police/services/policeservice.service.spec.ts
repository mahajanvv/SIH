import { TestBed, inject } from '@angular/core/testing';

import { PoliceserviceService } from './policeservice.service';

describe('PoliceserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PoliceserviceService]
    });
  });

  it('should be created', inject([PoliceserviceService], (service: PoliceserviceService) => {
    expect(service).toBeTruthy();
  }));
});
