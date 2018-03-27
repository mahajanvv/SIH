import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import {startWith} from 'rxjs/operators/startWith';
import {map} from 'rxjs/operators/map';
import {PoliceserviceService} from '../../services/policeservice.service';
import { Complaint } from '../../model/crime';
import { Router } from '@angular/router';
import { Victim } from '../../model/victim';



@Component({
  selector: 'app-addvictim',
  templateUrl: './addvictim.component.html',
  styleUrls: ['./addvictim.component.css']
})
export class AddvictimComponent implements OnInit {

  public userdata:any;
  public options:any;
  stateCtrl: FormControl;
  filteredStates: Observable<any[]>;
 victim:Victim;
ngOnInit(){}

  constructor(private policeservice:PoliceserviceService,private router:Router) {

    this.victim = new Victim(" "," "," ","msg",0);


    this.stateCtrl = new FormControl();

    this.policeservice.getusers().subscribe((users)=>{
      this.userdata = users;  
      console.log(users);
      console.log(this.userdata);
    });

    this.filteredStates = this.stateCtrl.valueChanges
      .pipe(
        startWith(''),
        map(state => state ? this.filterStates(state) : this.userdata)
      );

   }

   filterStates(name: string) {
    return this.userdata.filter(state =>
      state.name.toLowerCase().indexOf(name.toLowerCase()) === 0);
  }
   

  onSubmit(){
    var crimeid=localStorage.getItem('keyv');
    var qw=localStorage.getItem('police');
    var use = JSON.parse(qw);
    console.log(use.id);
    this.victim.refCrimeId=crimeid;
    this.victim.refPoliceId = use.id;

     this.policeservice.addvictim(this.victim)
     .subscribe((message)=>{

      this.router.navigateByUrl('/getcrime');
     });
   }
  



}
