import { Component, OnInit } from '@angular/core';
import { links } from '../../assets/data.json';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.scss']
})
export class LinksComponent implements OnInit {

  public xLinks: any;

  constructor() { }

  ngOnInit() {
    this.xLinks = links
  }

}
