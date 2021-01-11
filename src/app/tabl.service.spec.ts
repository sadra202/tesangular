import { TestBed } from '@angular/core/testing';

import { TablService } from './tabl.service';

describe('TablService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TablService = TestBed.get(TablService);
    expect(service).toBeTruthy();
  });
});
