import { Component, OnInit, ElementRef, NgZone , ViewChild } from '@angular/core';
import { MapsAPILoader } from '@agm/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import {PoliceserviceService} from '../../services/policeservice.service';
import { Complaint } from '../../model/crime';

import {} from '@types/googlemaps';

@Component({
  selector: 'app-addcrime',
  templateUrl: './addcrime.component.html',
  styleUrls: ['./addcrime.component.css']
})
export class AddcrimeComponent implements OnInit {
  public latitude: number;
  public longitude: number;
  public searchControl: FormControl;
  public zoom: number;
  public complaint :Complaint;

  
  
  @ViewChild("search")
  public searchElementRef: ElementRef;

  constructor(private mapsAPILoader: MapsAPILoader,private router:Router,
    private ngZone: NgZone,
  private policeservice:PoliceserviceService) { 
    this.complaint = new Complaint("","crime title","Description","q","q",[12,12],"q",new Date());
  }

    ngOnInit() {

      
      //set google maps defaults
      this.zoom = 4;
      this.latitude = 39.8282;
      this.longitude = -98.5795;
  
      //create search FormControl
      this.searchControl = new FormControl();
  
      //set current position
      this.setCurrentPosition();
  
      //load Places Autocomplete
      this.mapsAPILoader.load().then(() => {
        let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
          types: ["address"]
        });
        autocomplete.addListener("place_changed", () => {
          this.ngZone.run(() => {
            //get the place result
            let place: google.maps.places.PlaceResult = autocomplete.getPlace();
  
            //verify result
            if (place.geometry === undefined || place.geometry === null) {
              return;
            }
  
            //set latitude, longitude and zoom
            this.latitude = place.geometry.location.lat();
            this.longitude = place.geometry.location.lng();
            this.zoom = 12;
          });
        });
      });
    }

    onSubmit(){
      this.complaint.latlong[0] = this.latitude;
      this.complaint.latlong[1] = this.longitude;
      console.log(this.complaint);
      var qw=localStorage.getItem('police');
      var use = JSON.parse(qw);
      console.log(use.id);
      this.complaint.policestationID = use.id;
      console.log(this.complaint);
       this.policeservice.updateCrimeCount(this.complaint.crimetypeID,this.complaint.policestationID).subscribe((message)=>{
          console.log("updated count");
       });

       this.policeservice.addComplaint(this.complaint)
       .subscribe((message)=>{
        
        this.router.navigateByUrl('/getcrime');

         if(message.message=='filedcomplaint'){
  
          this.policeservice.getCrimes().subscribe((crimes)=>{
            this.complaint = crimes;  
            console.log(crimes);
            console.log(this.complaint);
          });
           //this.router.navigateByUrl('/addComplaint');
         }
         else{
          console.log(message); 
        }
       });
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
    private setCurrentPosition() {
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition((position) => {
          this.latitude = position.coords.latitude;
          this.longitude = position.coords.longitude;
          this.zoom = 12;
        });
      }
    }
  }


