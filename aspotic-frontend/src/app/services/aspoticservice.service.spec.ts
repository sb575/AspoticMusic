import { TestBed } from '@angular/core/testing';
import { AspoticserviceService } from './aspoticservice.service';

describe('AspoticserviceService', () => {
  let service: AspoticserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AspoticserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
