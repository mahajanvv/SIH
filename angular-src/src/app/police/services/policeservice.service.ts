import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';
import { tokenNotExpired } from 'angular2-jwt';
import { Complaint } from '../model/crime';
import { Victim } from '../model/victim';


@Injectable()
export class PoliceserviceService {
  authToken: any;
  user: any;

  constructor(private http: Http) {
     // this.isDev = true;  // Change to false before deployment
      }

  registerUser(user) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('police/register', user, {headers: headers})
      .map(res => res.json());
  }

  authenticateUser(user) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('police/authenticate', user, {headers: headers})
      .map(res => res.json());
  }

  getProfile() {
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.get('police/profile', {headers: headers})
      .map(res => res.json());
  }

  storeUserData(token, user) {
    localStorage.setItem('id_token', token);
    localStorage.setItem('police', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  loadToken() {
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }

  loggedIn() {
    return tokenNotExpired('id_token');
  }

  logout() {
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }
  addComplaint(complaint:Complaint){
    return this.http.post('crime/addcrimes',complaint)
    .map((res)=>res.json());
  }
  getCrimes(){
    return this.http.get('crime/getcrimes')
    .map((res)=>res.json());
  }
  getCrimeById(crimeid){
    return this.http.get('crime/getcrimeById/'+crimeid)
    .map((res)=>res.json());
  }
  updateCrimes(id,crime){
    return this.http.put('crime/updatecrime/'+id,crime)
    .map((res)=>res.json());
  }
  getCrimeByPoliceId(crimeid){
    return this.http.get('crime/getCrimeByPolice/'+crimeid)
    .map((res)=>res.json());
  }
  getusers(){
    return this.http.get('users/getusers')
    .map((res)=>res.json());
  }
  addvictim(victim:Victim){
    return this.http.post('victim/addvictim',victim)
    .map((res)=>res.json());
  }
  updateCrimeCount(crimetype,policeid){
    return this.http.get('stat/updatecrimecount/'+policeid+'/'+crimetype)
    .map((res)=>res.json());
  }
  getCrimeStat(pid){
    return this.http.get('stat/getcrimecount/'+pid) 
    .map((res)=>res.json());
  }
  addpolicestat(pid){
    return this.http.post('stat/addpolice',{pid:pid})
    .map((res)=>res.json());
  }
}
