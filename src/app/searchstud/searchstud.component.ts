import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-searchstud',
  templateUrl: './searchstud.component.html',
  styleUrls: ['./searchstud.component.css']
})
export class SearchstudComponent {

  admno=""
  searchdata:any=[]

  constructor(private api:ApiService){}

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

}
