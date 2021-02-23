import { Component, OnInit } from '@angular/core';

import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-starting',
  templateUrl: './starting.component.html',
  styleUrls: ['./starting.component.css']
})
export class StartingComponent implements OnInit {


name:string;

roll:number;
age:number;


  constructor(private man:ActivatedRoute) {

man.queryParams.subscribe((h)=>{
this.name=h.name;
this.roll=h.roll;
this.age=h.age;

});


   }




  ngOnInit(): void {
  }

  abc:any=[{
name:'Sk Nehal',
age:23,
class:'Twelve',
Gender:'Male'

},{
  name:'Ankita',
  age:23,
  class:'6th',
  Gender:'feMale'
  
  },
  {
    name:'Sk washim',
    age:20,
    class:'Thirteen',
    Gender:'Male'
    
    },
    {
      name:'Sk ibhrahim',
      age:20,
      class:'Thirteen',
      Gender:'Male'
      
      },
      {
        name:'Sk wahid',
        age:28,
        class:'Thirteen',
        Gender:'Male'
}

]

si:number=4;


}
