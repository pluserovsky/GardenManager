import { TestBed, inject } from '@angular/core/testing';

import { GardenService } from './garden.service';

describe('GardenService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GardenService]
    });
  });

  it('should be created', inject([GardenService], (service: GardenService) => {
    expect(service).toBeTruthy();
  }));
});
