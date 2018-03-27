import { Component, OnInit } from '@angular/core';
import {PoliceserviceService} from '../../services/policeservice.service';
import { Complaint } from '../../model/crime';
import { Router } from '@angular/router';

@Component({
  selector: 'app-showcrimemap',
  templateUrl: './showcrimemap.component.html',
  styleUrls: ['./showcrimemap.component.css']
})
export class ShowcrimemapComponent implements OnInit {
  public username: String;
  public pid:String;
  public complaint : Complaint[];

  constructor(private policeservice:PoliceserviceService,private router:Router) { 

    var qw=localStorage.getItem('police');
    var use = JSON.parse(qw);
    this.username=use.username;
    this.pid=use.id;
    console.log(this.pid);
  }

  ngOnInit(){
    this.policeservice.getCrimeByPoliceId(this.pid).subscribe((crimes)=>{
      this.complaint = crimes;  
      console.log(crimes);
      console.log(this.complaint);
    });

  }
   

}
