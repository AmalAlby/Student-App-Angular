import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-searchstud',
  templateUrl: './searchstud.component.html',
  styleUrls: ['./searchstud.component.css']
})
export class SearchstudComponent {

  admno=""
  searchdata:any=[]

  constructor(private api:ApiService,private route:Router){}

  read=()=>{
    let data={"admno":this.admno}
    console.log(data)

    this.api.searchstud(data).subscribe(
      (response:any)=>{
        console.log(response)
        if(response.length==0){
          alert("Invalid Input")
        }
        else{
          this.searchdata=response
        }
      }
    )
  }

  delete=(sid:any)=>{
    let data:any={"id":sid}
    this.api.deletestud(data).subscribe(
      (generate:any)=>{
        console.log(generate)
        if(generate.status=="success"){
          alert("Deleted Successfully")
          this.admno=""
          this.route.navigate(["/search"])
          this.searchdata=[]
        }
        else{
          alert("Invalid Input")
        }
      }
    )
  }

}
