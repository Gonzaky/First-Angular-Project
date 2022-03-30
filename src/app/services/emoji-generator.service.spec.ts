import { TestBed } from '@angular/core/testing';

import { EmojiGeneratorService } from './emoji-generator.service';

describe('EmojiGeneratorService', () => {
  let service: EmojiGeneratorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmojiGeneratorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
