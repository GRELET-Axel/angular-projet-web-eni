import { TestBed } from '@angular/core/testing';

import { CampusService } from './campus.service';

describe('SitesManagementService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CampusService = TestBed.get(CampusService);
    expect(service).toBeTruthy();
  });
});
