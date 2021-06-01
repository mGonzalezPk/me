import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/shared/models';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  webSkills: Array<Skill> = [
    {
      name: 'Angular',
      level: 75
    },
    {
      name: 'NodeJs',
      level: 50
    },
    {
      name: 'ReactJs',
      level: 25
    },
    {
      name: 'HTML',
      level: 75
    },
    {
      name: 'CSS',
      level: 75
    },

  ]
  netSkills: Array<Skill> = [
    {
      name: 'C#',
      level: 50
    },
    {
      name: 'Entity Framework',
      level: 50
    },
    {
      name: 'Asp.NET',
      level: 25
    },
    {
      name: 'WPF',
      level: 50
    }
  ]
  dbSkills: Array<Skill> = [
    {
      name: 'Microsoft SQL Server',
      level: 50
    },
    {
      name: 'PostgreSQL',
      level: 75
    },
    {
      name: 'MySql',
      level: 25
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
