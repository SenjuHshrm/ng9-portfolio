import { Component, OnInit } from '@angular/core';
import { info } from '../../assets/data.json';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public xInfo: any

  constructor() { }

  ngOnInit() {
    this.xInfo = info
  }

}
