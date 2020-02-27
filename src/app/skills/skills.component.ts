import { Component, OnInit } from '@angular/core';
import { skills } from '../../assets/data.json';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  public xSkills: any;

  constructor() { }

  ngOnInit() {
    this.xSkills = skills;
  }

}
