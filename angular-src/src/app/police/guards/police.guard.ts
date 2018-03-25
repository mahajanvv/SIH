import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { PoliceserviceService } from '../services/policeservice.service';

@Injectable()
export class PoliceGuard implements CanActivate {
  constructor (private authService:PoliceserviceService, private router:Router){

  }

  canActivate() {
    if(this.authService.loggedIn()) {
      return true;
    } else {
      this.router.navigate(['/plogin']);
      return false;
    }
  }
}
