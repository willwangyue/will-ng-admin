import { Component, OnInit,OnDestroy } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { WerewolvesService } from '../werewolves.service'

@Component({
  selector: 'app-werewolves-edit',
  templateUrl: './werewolves-edit.component.html',
  styleUrls: ['./werewolves-edit.component.scss']
})
export class StudentEditComponent implements OnInit,OnDestroy {
  werewolvesId:string="";
  werewolves:any={
    name:""
  };
  isNew:boolean = false;

  // Subscribe Declaration
  getStudentSubscribe:any;
  
  constructor(private route: ActivatedRoute,
  private werewolvesServ:WerewolvesService,
  private location: Location) {
  }
  back(){
    this.location.back();
  }
  save(){
    if(this.isNew){
      this.werewolvesServ.werewolvess.push(this.werewolves)
    }
    this.location.back();
  }
  ngOnInit() {
    this.getStudentSubscribe = this.route.params.subscribe(params=>{
      this.getStudent(params['sid']).then(werewolves=>{
      console.log(werewolves)
      this.werewolvesId = werewolves.id;
      this.werewolves = werewolves
    }).catch(err=>{
      console.log(err)
    })
    })
  }
  ngOnDestroy(){
    this.getStudentSubscribe.unsubscribe();
  }

  getStudent(id: any): Promise<any> {
    
    let p = new Promise((resolve,reject)=>{
      if(id=="new"){
        let werewolves = {role:""}
        this.isNew = true;
        resolve(werewolves)
      }
      let werewolves = this.werewolvesServ.werewolvess.find(item=>item.id == id)
      if(werewolves){
        resolve(werewolves)
      }else{
        reject("werewolves not found")
      }
    })
    return p
}

}
