import { TestBed } from '@angular/core/testing';

import { FetchDataService } from './fetch-data.service';

describe('FetchDataService', () => {
  let service: FetchDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be either active or manage or deleted ', () => {
    let current_page = service.current_page;
    expect(current_page).toBe('active' || 'manage' || 'deleted');
  });
});
