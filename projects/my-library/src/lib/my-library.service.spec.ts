import { TestBed } from '@angular/core/testing';

import { MyLibraryService } from './my-library.service';

describe('MyLibraryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MyLibraryService = TestBed.get(MyLibraryService);
    expect(service).toBeTruthy();
  });
});
