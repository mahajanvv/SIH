import { Component, OnInit } from '@angular/core';
import {PoliceserviceService} from '../../services/policeservice.service';
import { Complaint } from '../../model/crime';
import { Router } from '@angular/router';

@Component({
  selector: 'app-getcrime',
  templateUrl: './getcrime.component.html',
  styleUrls: ['./getcrime.component.css']
})
export class GetcrimeComponent implements OnInit {
  public username: String;
  public pid:String;
  public compliant : Complaint[];
    constructor(private policeservice:PoliceserviceService,private router:Router) { 

      var qw=localStorage.getItem('police');
      var use = JSON.parse(qw);
      this.username=use.username;
      this.pid=use.id;
      console.log(this.pid);
    }
  
    ngOnInit() {
      this.policeservice.getCrimeByPoliceId(this.pid).subscribe((crimes)=>{
        this.compliant = crimes;  
        console.log(crimes);
        console.log(this.compliant);
      });
    }

    update(id)
    {
      console.log(id);
      localStorage.setItem("key",id);
      this.router.navigateByUrl('/updatecrime');
    }
    addvictim(id)
    {
      console.log(id);
      localStorage.setItem("keyv",id);
      this.router.navigateByUrl('/addvictim');
    }
  

}
