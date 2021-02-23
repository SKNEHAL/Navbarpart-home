import { Component, OnInit } from '@angular/core';

import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-passed',
  templateUrl: './passed.component.html',
  styleUrls: ['./passed.component.css']
})
export class PassedComponent implements OnInit {


id:number=34;
name:string='Nehal';




  constructor(private activate:ActivatedRoute) { 

this.activate.queryParams.subscribe((ht)=>{

this.id=ht.id;
this.name=ht.name;


});


  }

  ngOnInit(): void {
  }

}
