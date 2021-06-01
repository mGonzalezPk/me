import { Component, OnInit } from '@angular/core';
import { Education } from 'src/app/shared/models';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
  items: Education[];
  constructor() { }

  ngOnInit(): void {
    this.items = this.generateItems();
  }
  generateItems(): Education[] {
    const resItems = new Array<Education>();
    resItems.push(
      {
        description: 'The technical world, hardware, and computer fundamentals as principles of networks and programming were my first approach to being a software developer.',
        title: 'Tecnico en Informatica',
        period: '',
        school: 'CBTa #147'
      },
      {
        description: 'With more advanced subjects in software development, methodologies, and server learning, being a software developer would be my career.',
        title: 'Ingeniero en Sistemas Computacionales',
        period: '',
        school: 'Instituto Tecnologico de Delicias.'
      },
      {
        description: 'Self-taught and faithful believer that learning depends on oneself.',
        title: 'Self Learning',
        period: '',
        school: ''
      }
    );
    return resItems;
  }

}
