import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  users:Array<any> = [
      {
       "index":6,
       "role":"法官",
       "role_en":"moderator",
       "describe":"  website_moderator",
       "responsibility":"control the game",
       "victory":"not applicable",
       "number":1
      },
      {
       "index":4,
       "role":"狼人",
       "role_en":"werewolves",
       "describe":"  website_werewolves",
       "responsibility":"  kill people at night",
       "victory":"others all out",
       "number":4
      },
      {
       "index":5,
       "role":"村民",
       "role_en":"villagers",
       "describe":"  website_villagers",
       "responsibility":"  find the werewolves",
       "victory":"werewolves all out",
       "number":4
      },
      {
       "index":2,
       "role":"守卫",
       "role_en":"savior",
       "describe":"  website_savior",
       "responsibility":"  guard people at night",
       "victory":"werewolves all out",
       "number":1
      },
      {
       "index":1,
       "role":" 预言家",
       "role_en":"seer",
       "describe":"  website_seer",
       "responsibility":"  check people at night",
       "victory":"werewolves all out",
       "number":1
      },
      {
       "index":3,
       "role":"女巫",
       "role_en":"witch",
       "describe":"  website_witch",
       "responsibility":"  save&kill others at night",
       "victory":"werewolves all out",
       "number":1
      }
  ]
deleteLast(){
  this.users.pop()
}
saveNewUser(){
  this.users.push({
     "index":666,
     "role":"女巫",
     "role_en":"witch",
     "describe":"website_witch",
     "responsibility":"  save&kill others at night",
     "victory":"werewolves all out",
     "number":1
  })
}
  sortByAsccending(){
    // 参考MDN Array操作的API文档 Array相关方法方法
    this.users.sort(function (a,b) 
     {
      if (a.index > b.index)
      {
        return 1;
      } 

      if (a.index < b.index)
      {
        return -1;
      }  

      return 0;  
     } 
    )
  }
  sortByDesccending(){
    // 参考MDN Array操作的API文档 Array相关方法
    // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array
    this.users.sort(function (a,b) 
     {
      if (a.index > b.index)
      {
        return -1;
      } 

      if (a.index < b.index)
      {
        return 1;
      }  

      return 0;  
     } 
    )
  }
  sortByRadom(){
    // 参考MDN Array操作的API文档 Math相关方法
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
    this.users.sort(function (a,b)
    {
       if (Math.random() > 0.5) 
       {
         return 1;
       }

       if (Math.random() < 0.5) {
         return -1;
       }
       return 0;
    }
    )
  }
  constructor(meta: Meta, title: Title) {
    title.setTitle('My Home Page');

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
