import { TestBed } from '@angular/core/testing';

import { CampaignService } from './postcampaign.service';

describe('CampaignService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CampaignService = TestBed.get(CampaignService);
    expect(service).toBeTruthy();
  });
});
