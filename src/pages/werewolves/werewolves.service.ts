import { Injectable } from "@angular/core";

@Injectable()
export class WerewolvesService{
    isLogined:boolean = false;
    werewolvess: Array < any > = [{
       "id":6,
       "role":"法官",
       "role_en":"moderator",
       "describe":"  website_moderator",
       "responsibility":"control the game",
       "victory":"not applicable",
       "number":1
    },
    {
       "id":4,
       "role":"狼人",
       "role_en":"werewolves",
       "describe":"  website_werewolves",
       "responsibility":"  kill people at night",
       "victory":"others all out",
       "number":4
    },
    {
       "id":5,
       "role":"村民",
       "role_en":"villagers",
       "describe":"  website_villagers",
       "responsibility":"  find the werewolves",
       "victory":"werewolves all out",
       "number":4
    },
    {
       "id":2,
       "role":"守卫",
       "role_en":"savior",
       "describe":"  website_savior",
       "responsibility":"  guard people at night",
       "victory":"werewolves all out",
       "number":1
    },
    {
       "id":1,
       "role":" 预言家",
       "role_en":"seer",
       "describe":"  website_seer",
       "responsibility":"  check people at night",
       "victory":"werewolves all out",
       "number":1
    },
    {
       "id":3,
       "role":"女巫",
       "role_en":"witch",
       "describe":"  website_witch",
       "responsibility":"  save&kill others at night",
       "victory":"werewolves all out",
       "number":1
    },
    {
       "id":7,
       "role":"长老",
       "role_en":"acient",
       "describe":"  website_acient",
       "responsibility":" have two extra lives",
       "victory":"werewolves all out",
       "number":1
    },
    {
       "id":8,
       "role":"白痴",
       "role_en":"idiot",
       "describe":"  website_idiot",
       "responsibility":"can't be voted out",
       "victory":"werewolves all out",
       "number":1
    }
    ,
    {
       "id":9,
       "role":"骑士",
       "role_en":"knight",
       "describe":"  website_knight",
       "responsibility":"check one person whether a werewolf",
       "victory":"werewolves all out",
       "number":1
    },
    
  ];

    constructor(){

    }

    getStudents(){
        return this.werewolvess;
    }

}

