import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobExpirienceComponent } from './job-expirience.component';

describe('JobExpirienceComponent', () => {
  let component: JobExpirienceComponent;
  let fixture: ComponentFixture<JobExpirienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobExpirienceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobExpirienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
