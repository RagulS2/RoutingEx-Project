import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-cpm2',
  templateUrl: './cpm2.component.html',
  styleUrls: ['./cpm2.component.scss']
})


export class Cpm2Component implements OnInit{
  services:any;
  constructor(public service:ServiceService,public rout:Router){}
  ngOnInit(): void {
    this.getUsersData();
  }
  getUsersData(){
    this.service.getAllUsers().subscribe((Userdata)=>{
      this.services=Userdata;
      console.log(Userdata);
      
    });

}
view(id:number){
  console.log(id);
  
  this.rout.navigate(['employee',id])

}
}