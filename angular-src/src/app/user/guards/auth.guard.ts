import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { UserserviceService } from '../services/userservice.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor (private authService:UserserviceService, private router:Router){

  }

  canActivate() {
    if(this.authService.loggedIn()) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
