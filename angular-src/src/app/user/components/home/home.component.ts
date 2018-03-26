import { Component, OnInit } from '@angular/core';
import {UserserviceService} from '../../services/userservice.service';
import { ElementRef, NgZone , ViewChild } from '@angular/core';
import { MapsAPILoader } from '@agm/core';
import { FormControl } from '@angular/forms';
import { } from '@types/googlemaps';
import { Router } from '@angular/router';
import { CommunicationService } from '../../services/communication.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  public cities: any;
  public searchControl: FormControl;

  @ViewChild("search")
  public searchElementRef: ElementRef;

  constructor(private mapsAPILoader: MapsAPILoader, private ngZone: NgZone, private userService:UserserviceService
   ,private roter:Router, private comm:CommunicationService) {
     
    }
   
  ngOnInit() {
   
    this.userService.getCities().subscribe((data)=>{
      this.cities = data;
    });
     //create search FormControl
     this.searchControl = new FormControl();

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
           
         });
       });
     });
   }
   searchclicked(){
     this.comm.setData(this.cities);
    this.roter.navigateByUrl('/visual');
   }
   searchbycity(){
    this.comm.setData(this.cities);
    this.roter.navigateByUrl('/visual');
   }
}
