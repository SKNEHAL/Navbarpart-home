import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { PassedComponent } from '../passed/passed.component';
import { EndingComponent } from '../ending/ending.component';
import { StartingComponent } from '../starting/starting.component';

import {HttpClientModule} from '@angular/common/http';
import { CommonServiceService } from '../common-service.service';



@Component({
  selector: 'app-login-part',
  templateUrl: './login-part.component.html',
  styleUrls: ['./login-part.component.css']
})
export class LoginPartComponent implements OnInit {

  constructor(private route:Router,private commonservice:CommonServiceService){}
  ngOnInit(): void {


this.getla();

  }


edit=false;

user:string="";

pass:string="";

se:any="";

func(){

if(this.user=="sknehal786786@gmail.com"||this.pass=="nehal")
{
// this.route.navigate(['Login']);
// this.se=PassedComponent;
this.user=this.pass="";

}
else
{
  alert("no");
}



}
ge:object;

y:any="";
f1()
{
this.y=EndingComponent
// this.route.navigate(['Ending']);

}
f2()
{
this.y=StartingComponent


}

userobj={

email:"",
password:""

}


edituser(show){

this.userobj=show;
this.edit=true;
}




adduser(f){

this.commonservice.createuser(f).subscribe((Response)=>{
console.log(f);
console.log("userd adderd");

this.getla();

this.userobj.email=this.userobj.password="";

})



}




deleteuser(j){


this.commonservice.deleteuser(j).subscribe(()=>{

this.getla();

});
}




getla(){

this.commonservice.getalluser().subscribe((response)=>{

  this.ge=response
});


}


updatecode(){
this.edit=!this.edit;
this.commonservice.updateuser(this.userobj).subscribe(()=>{
this.getla();
this.userobj.email=this.userobj.password="";
});
}
}
