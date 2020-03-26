import { TestBed } from '@angular/core/testing';

import { AptitudeQuestionService } from './aptitude-question.service';

describe('AptitudeQuestionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AptitudeQuestionService = TestBed.get(AptitudeQuestionService);
    expect(service).toBeTruthy();
  });
});
