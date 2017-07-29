import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

import { WerewolvesService } from '../../werewolves/werewolves.service'


@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent implements OnInit {

    users:Array<any> = [];
    constructor(meta: Meta, title: Title, private werewolvesServ:WerewolvesService) {
      // this.users = this.werewolvesServ.getStudents()

    title.setTitle('My About Page');

    meta.addTags([ 
      {
        name: 'author', content: 'eddic'
      },
      {
        name: 'keywords', content: 'angular 4 tutorial, angular seo'
      },
      {
        name: 'description', content: 'This is my great description.'
      },
    ])
  }

  ngOnInit() {
  }

}
