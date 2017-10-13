import { TestBed, inject } from '@angular/core/testing';

import { SearchSuggestionService } from './search-suggestion.service';

describe('SearchSuggestionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SearchSuggestionService]
    });
  });

  it('should be created', inject([SearchSuggestionService], (service: SearchSuggestionService) => {
    expect(service).toBeTruthy();
  }));
});
