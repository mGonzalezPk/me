import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResumeRoutingModule } from './resume-routing.module';
import { ResumeComponent } from './resume/resume.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { JobExpirienceComponent } from './components/job-expirience/job-expirience.component';
import { EducationComponent } from './components/education/education.component';
import { SkillsComponent } from './components/skills/skills.component';


@NgModule({
  declarations: [ResumeComponent, TimelineComponent, JobExpirienceComponent, EducationComponent, SkillsComponent],
  imports: [
    CommonModule,
    ResumeRoutingModule
  ]
})
export class ResumeModule { }
