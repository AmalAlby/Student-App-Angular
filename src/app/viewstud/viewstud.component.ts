import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewstud',
  templateUrl: './viewstud.component.html',
  styleUrls: ['./viewstud.component.css']
})
export class ViewstudComponent {

  data:any=[]

  constructor(private api:ApiService){
    api.fetchdata().subscribe(
      (response:any)=>{
        this.data=response
      }
    )
  }

}
