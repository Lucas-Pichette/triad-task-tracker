import { TestBed } from '@angular/core/testing';

import { TaskDataService } from './task-data.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';


describe('TaskDataService', () => {
  let service: TaskDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TaskDataService]
    });
    service = TestBed.inject(TaskDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have getTasks function', () => {
    const service: TaskDataService = TestBed.get(TaskDataService);
    expect(service.getTasks).toBeTruthy();
   });
});
