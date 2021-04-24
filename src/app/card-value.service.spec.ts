import { TestBed } from '@angular/core/testing';

import { CardValueService } from './card-value.service';

describe('CardValueService', () => {
  let service: CardValueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardValueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
