import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'separate'
})
export class SeparatePipe implements PipeTransform {

  transform(value:string,age:number):any{


    if(age==20){
return '*'+value

    }
  else
  {
return value;

  }

  }


  
  
}
