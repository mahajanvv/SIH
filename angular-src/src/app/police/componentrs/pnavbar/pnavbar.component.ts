import { Component, OnInit } from '@angular/core';
import { PoliceserviceService } from '../../services/policeservice.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
@Component({
  selector: 'app-pnavbar',
  templateUrl: './pnavbar.component.html',
  styleUrls: ['./pnavbar.component.css']
})
export class PnavbarComponent implements OnInit {

  constructor(public authService: PoliceserviceService,
    private router: Router,
    private flashMessage: FlashMessagesService) { }

  ngOnInit() {
  }

  onLogoutClick() {
    this.authService.logout();
    this.flashMessage.show('You are logged out', {
      cssClass: 'alert-success', timeout: 3000
    });
    this.router.navigate(['/plogin']);
    return false;
  }

}
