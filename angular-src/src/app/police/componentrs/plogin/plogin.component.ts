import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { PoliceserviceService } from '../../services/policeservice.service';
import { PolicevalidateService } from '../../services/policevalidate.service';


@Component({
  selector: 'app-plogin',
  templateUrl: './plogin.component.html',
  styleUrls: ['./plogin.component.css']
})
export class PloginComponent implements OnInit {
  username: String;
  password: String;
  public loggedIn: boolean;
  constructor(private authService: PoliceserviceService,
    private router: Router,
    private flashMessage: FlashMessagesService,
    private validateService:PolicevalidateService) { }

  ngOnInit() 
  {
    
  }
  onLoginSubmit() {
    const user = {
      username: this.username,
      password: this.password
    }

    this.authService.authenticateUser(user).subscribe(data => {
        if(data.success) {
          this.authService.storeUserData(data.token, data.user);
          this.flashMessage.show('You are now logged in', {cssClass: 'alert-success', timeout: 5000});
          this.router.navigate(['pdashboard']);
        } else {
          this.flashMessage.show(data.msg, {cssClass: 'alert-danger', timeout: 5000});
          this.router.navigate(['plogin']);
        }
    });
  }

}
