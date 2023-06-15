import { Component,OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cpm1',
  templateUrl: './cpm1.component.html',
  styleUrls: ['./cpm1.component.scss']
})
export class Cpm1Component implements OnInit {

   services:any;

 
  constructor(public service:ServiceService,public rout:Router){}
  
  ngOnInit(): void {
this.getUsersData();  

  }
  getUsersData(){
    this.service.getUsers().subscribe((Userdata)=>{
      this.services=Userdata;
      console.log(Userdata);
      
    });
    
    }

    deleteUser(id:number) {
      this.service.deleteUser(id).subscribe(() => {
        console.log('Deleted successfully.');
        this.getUsersData();
      });
    }

show(id:number){
  this.rout.navigate(['company',id])
}
}

