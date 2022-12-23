import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InternalMarks } from '../internalmarks';
import { InternalMarksService } from '../internalmarks.service';

@Component({
  selector: 'app-internalmarks-register',
  templateUrl: './internalmarks-register.component.html',
  styleUrls: ['./internalmarks-register.component.css']
})
export class InternalmarksRegisterComponent {
  internalmarks: InternalMarks = new InternalMarks(0,0,0,0,0,0,0,"","");
  message:any;
  staffId:number=0;
    constructor(private internalmarksService:InternalMarksService,private router:Router,private activatedroute:ActivatedRoute) { }
  
    ngOnInit(): void {
      this.staffId=this.activatedroute.snapshot.params["staffId"];
    }
    public internalmaksRegister(){
       this.internalmarksService.internalmarksRegisterService(this.internalmarks,this.staffId).subscribe(
        data =>{console.log("Login Success"),
      this.router.navigate(['/stafflistinter'])},
        error =>{console.log("Login Failed"),
      this.message="login failed. try again"})
      }
      back()
      {
      
      }
  
}
