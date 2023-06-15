import { Component ,OnInit} from '@angular/core';
import { ServiceService } from '../service.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
interface Data{
  id:number;
  EmpName:string;
  empAddress:string
}
@Component({
  selector: 'app-detail1',
  templateUrl: './detail1.component.html',
  styleUrls: ['./detail1.component.scss']
})
export class Detail1Component implements OnInit {
  value:Data[]=[];
       constructor(public s:ServiceService,private route:ActivatedRoute,public rout:Router){}
   ngOnInit(): void {
     // throw new Error('Method not implemented.');
     let id=this.route.snapshot.paramMap.get('id');
         this.s.getDataById(id).subscribe((data:any)=>{
           
 this.value=data
 console.log(this.value);
 
     }
     )
}
getAllUsers(){
  this.rout.navigate(['employee'])
}
}
