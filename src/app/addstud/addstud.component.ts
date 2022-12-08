import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-addstud',
  templateUrl: './addstud.component.html',
  styleUrls: ['./addstud.component.css']
})
export class AddstudComponent {

  name=""
  admno=""
  rollno=""
  college=""

  constructor(private api:ApiService){}

  readvalues=()=>{
    let data:any={"name":this.name,"admno":this.admno,"rollno":this.rollno,"college":this.college}
    console.log(data)
    
    this.api.addstudent(data).subscribe(
      (response:any)=>{

        console.log(response)
        if(response.status=="success"){
          alert("Added Successfully")
          this.admno=""
          this.name=""
          this.college=""
          this.rollno=""
        }
        else{
          alert("Something Went Wrong")
        }

      }
    )
  }



}
