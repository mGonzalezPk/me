import { Component, OnInit } from '@angular/core';
import { AboutMe } from 'src/app/shared/models';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {
  aboutMe = new AboutMe();
  constructor() { }

  ngOnInit(): void {
  }


}
