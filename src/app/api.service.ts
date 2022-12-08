import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { retry } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  addstudent=(datatosend:any)=>{
    return this.http.post("http://localhost:8080/add",datatosend)
  }

  fetchdata=()=>{
    return this.http.get("http://localhost:8080/view")
  }

  searchstud=(datasearch:any)=>{
    return this.http.post("http://localhost:8080/search",datasearch)
  }

  deletestud=(delstud:any)=>{
    return this.http.post("http://localhost:8080/delete",delstud)
  }


}
