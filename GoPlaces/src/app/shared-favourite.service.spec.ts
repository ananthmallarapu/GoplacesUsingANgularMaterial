import { TestBed, inject } from '@angular/core/testing';

import { SharedFavouriteService } from './shared-favourite.service';

describe('SharedFavouriteServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SharedFavouriteService]
    });
  });

  it('should be created', inject([SharedFavouriteService], (service: SharedFavouriteService) => {
    expect(service).toBeTruthy();
  }));
});
