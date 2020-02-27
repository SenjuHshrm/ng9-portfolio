import { Component, OnInit } from '@angular/core';
import { accmp } from '../../assets/data.json';
@Component({
  selector: 'app-accomplishments',
  templateUrl: './accomplishments.component.html',
  styleUrls: ['./accomplishments.component.scss']
})
export class AccomplishmentsComponent implements OnInit {

  public xAccmp: any

  constructor() { }

  ngOnInit() {
    this.xAccmp = accmp
  }

}
