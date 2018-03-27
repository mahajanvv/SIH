import { Component, OnInit, ElementRef, NgZone , ViewChild } from '@angular/core';
import { MapsAPILoader } from '@agm/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import {PoliceserviceService} from '../../services/policeservice.service';
import { Complaint } from '../../model/crime';
import {} from '@types/googlemaps';

@Component({
  selector: 'app-updatecrime',
  templateUrl: './updatecrime.component.html',
  styleUrls: ['./updatecrime.component.css']
})
export class UpdatecrimeComponent implements OnInit {
  public latitude: number;
  public longitude: number;
  public searchControl: FormControl;
  public zoom: Number;
  public complaint :Complaint;
 public title;
  @ViewChild("search")
  public searchElementRef: ElementRef;
public crimeid:String;
  constructor(private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone,
  private policeservice:PoliceserviceService) { 
    this.complaint = new Complaint("1","q","q","q","q",[12,12],"q",new Date());
  }

  ngOnInit() {

    this.crimeid=localStorage.getItem('key');
    
    this.policeservice.getCrimeById(this.crimeid).subscribe((crimes)=>{
      this.complaint = crimes;  
      //this.complaint = new Complaint("1",this.complaint.title,this.complaint.description,this.complaint.crimetypeID,this.complaint.city_code,[this.complaint.latlong[0],this.complaint.latlong[1]],this.complaint.policeStationId,this.complaint.crime_date);
    this.title=this.complaint.title;
      console.log("2"+crimes);
      console.log("3"+this.complaint);
    });

      //set google maps defaults
      this.zoom = 4;
      this.latitude = this.complaint.latlong[0];
      this.longitude = this.complaint.latlong[1];

    }

    onSubmit(){
      this.complaint.latlong[0] = this.latitude;
      this.complaint.latlong[1] = this.longitude;
      console.log("1"+this.complaint);
      var qw=localStorage.getItem('police');
      var use = JSON.parse(qw);
      this.complaint.policestationID = use.id;
      console.log("8"+this.complaint);
      this.policeservice.updateCrimes(this.crimeid,this.complaint).subscribe((crimes)=>{
            this.complaint = crimes;  
            console.log("9"+crimes);
            console.log("10"+this.complaint);
          });
           //this.router.navigateByUrl('/addComplaint');
    
        
        }

  dragEnded(event){
    // var location = event.coords;
     this.latitude = event.coords.lat;
     this.longitude = event.coords.lng;
     /*const geocoder = new google.maps.Geocoder();
     geocoder.geocode({'location':event.coords},(res,status)=>{
       if(status === google.maps.GeocoderStatus.OK 
       && res.length){
         this.ngZone.run(()=>{
           this.setLocation(res[0]);
         });
       }
     });*/
   }



}
