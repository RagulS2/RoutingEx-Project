import { Component ,OnInit} from '@angular/core';
import { ServiceService } from '../service.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

interface Data{
  id:number;
  cName:string;
  address:string,
  noe:number,
  location:string
}

@Component({
  selector: 'app-detailcomp',
  templateUrl: './detailcomp.component.html',
  styleUrls: ['./detailcomp.component.scss']
})

export class DetailcompComponent implements OnInit{
 val:Data[]=[];

 body:Data={
  id:0,
  cName:'',
  address:'',
  noe:0,
  location:''
}

      constructor(public s:ServiceService,private route:ActivatedRoute,public rout:Router){}
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    let id:number=Number(this.route.snapshot.paramMap.get('id'));
        this.s.getUserById(id).subscribe((data:any)=>{
          
this.val=data
console.log(this.val);
          
this.body={
  id:data[0].id,
  cName:data[0].cName,
  address:data[0].address,
  noe:data[0].noe,
  location:data[0].location
}

    }
    )
    // this.route.params.subscribe(d=>{
    //   let id=d['id']
    //   this.s.getUserById(id).subscribe((data)=>this.val=data)
    //   console.log(d);
      
    // })
//     this.s.getUserById(id).subscribe((data)=>{
// this.val=data

//     }
//     )

// let id1=this.route.snapshot.paramMap.get('id');
// this.s.getDataById(id1).subscribe((data)=>{
  
// this.value=data
// console.log(this.value);

// }
// )
  }

  createUser(){
    this.s.createUser(this.body).subscribe()
    console.log(this.body);
  }
  updateUser(){
    this.s.updateUser(this.body).subscribe()
    console.log(this.body);
  }
deleteUser(){
  console.log(this.body.id);
  this.s.deleteUser(this.body.id).subscribe()
  console.log("deleted...");
}

  getBack(){
    this.rout.navigate(['company'])
  }
    
}
