import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http' ;
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  
  constructor(private http:HttpClient) { }

  getUsers(){
    const geturl="http://localhost:4000/all";
    return this.http.get(geturl);
  }
  getUserById(id:number){
    const url="http://localhost:4000/getById/"
    return this.http.get(url+id)
  }

  createUser(body:any){
    const url="http://localhost:4000/insert";
    return this.http.post(url,body);
  }

  updateUser(body:any){
    const url="http://localhost:4000/update"
    return this.http.put(url,body)
  }

  getDataById(id:string |null){
    const url="http://localhost:4000/getId/"
    return this.http.get(url+id);
  }
  getAllUsers(){
    const geturl="http://localhost:4000/allemp";
    return this.http.get(geturl);
  }
  deleteUser(id:any){
    const url="http://localhost:4000/delete";
    return this.http.put(url,{id:id})
  }
}
