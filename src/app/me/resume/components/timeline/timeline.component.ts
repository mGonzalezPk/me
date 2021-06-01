import { Component, Input, OnInit } from '@angular/core';
import { TimelineItem } from 'src/app/shared/interfaces';
import { Education, Expirience } from 'src/app/shared/models';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {
  @Input()
  items: Education[] | Expirience[];

  timelineItems: TimelineItem[];

  colors = ['primary', 'success', 'warning', 'danger', 'info']

  constructor() { }

  ngOnInit(): void {
    if (this.items && this.items.length > 0)
      this.timelineItems = (this.items[0] instanceof Education) ? this.generateTimelineFromEducation(this.items as Education[]) : this.generateTimelineFromExpirience(this.items as Expirience[]);
    else
      this.items = [];
  }
  generateTimelineFromEducation(items: Education[]): TimelineItem[] {
    const resItems = new Array<TimelineItem>();
    items.forEach(item => {
      resItems.push({
        title: item.title,
        description: item.description,
        place: item.school,
        time: item.period,
        color: ''
      });
    });
    return resItems;
  }
  generateTimelineFromExpirience(items: Expirience[]): TimelineItem[] {
    const resItems = new Array<TimelineItem>();
    items.forEach(item => {
      resItems.push({
        description: item.description,
        place: item.company,
        time: item.period,
        title: item.title,
        color: ''
      });
    });
    return resItems;
  }

}
