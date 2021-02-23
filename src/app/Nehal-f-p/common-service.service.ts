import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {

  constructor(private http:HttpClient) { }

createuser(user){


return this.http.post(" http://localhost:3000/UsersData",user);

}
getalluser(){

return this.http.get(" http://localhost:3000/UsersData");

}
updateuser(ht){

return this.http.put('http://localhost:3000/UsersData/'+ht.id,ht);

}
deleteuser(h){


 let a= this.http.delete("http://localhost:3000/UsersData/"+h.id);

  if(a){

     let d=confirm("Do You Want To Delete");
if(d==true){


  return a;
}
   
}

  }
}
