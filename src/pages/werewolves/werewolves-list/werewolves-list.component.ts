import {
  Component,
  OnInit
} from '@angular/core';
import {
  Meta,
  Title
} from '@angular/platform-browser';

import {WerewolvesService} from "../werewolves.service";
@Component({
  selector: 'app-werewolves-list',
  templateUrl: './werewolves-list.component.html',
  styleUrls: ['./werewolves-list.component.scss']
})
export class StudentListComponent implements OnInit {
  searchText: string = "";
  searchType: string = "role";
  selectStudent:any={
    role:"未选择"
  };
  searchResult:Array<any>;
  werewolvess:Array<any>=[];
  deleteLast() {
    this.werewolvess.pop();
  }
  search(){
    this.searchResult = this.werewolvess.filter(item=>{
      let result = String(item[this.searchType]).match(this.searchText)
      if(result){
        return true
      }else{
        return false
      };
    })
  }
  getUserClick(ev){
    this.selectStudent = ev
    console.log(ev);
  }
 
  sortByAsccending(type="id") {
    // 参考MDN Array操作的API文档 Array相关方法方法
    this.werewolvess.sort((a,b)=>{
      return a[type] - b[type];
    });
  }
  sortByDesccending(type="id") {
    // 参考MDN Array操作的API文档 Array相关方法
    // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array
    this.werewolvess.sort((a,b)=>{
      return b[type] - a[type];
    });
  }
  sortByRadom() {
    // 参考MDN Array操作的API文档 Math相关方法
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
  this.werewolvess.forEach((werewolves,index)=>{
    werewolves.tempIndex = Math.random();
  })
    this.sortByAsccending("tempIndex");
  }
  constructor(meta: Meta, title: Title, private werewolvesServ:WerewolvesService) {
    this.werewolvess = this.werewolvesServ.getStudents()
 
    // Set SEO
    title.setTitle('My Home Page');

    meta.addTags([{
        name: 'author',
        content: 'eddic'
      },
      {
        name: 'keywords',
        content: 'angular 4 tutorial, angular seo'
      },
      {
        name: 'description',
        content: 'This is my great description.'
      },
    ]);
    // end of SEO
  }

  ngOnInit() {}
}
