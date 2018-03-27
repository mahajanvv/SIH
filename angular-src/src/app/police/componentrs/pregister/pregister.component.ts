import { Component, OnInit } from '@angular/core';
import { PolicevalidateService } from '../../services/policevalidate.service';
import { PoliceserviceService } from '../../services/policeservice.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pregister',
  templateUrl: './pregister.component.html',
  styleUrls: ['./pregister.component.css']
})
export class PregisterComponent implements OnInit {
  name: String;
  username: String;
  email: String;
  password: String;

  constructor(private validateService: PolicevalidateService,
    private authService: PoliceserviceService,private policeservice:PoliceserviceService,
    private router: Router,
    private flashMessage: FlashMessagesService) { }

  ngOnInit() {
  }

  onRegisterSubmit() {
    const user = {
      name: this.name,
      email: this.email,
      username: this.username,
      password: this.password
    }

    // Required Fields
    if(!this.validateService.validateRegister(user)) {
      this.flashMessage.show('Please fill in all fields', {cssClass: 'alert-danger', timeout: 3000});
      return false;
    }

    // Validate Email
    if(!this.validateService.validateEmail(user.email)) {
    this.flashMessage.show('Please use a valid email', {cssClass: 'alert-danger', timeout: 3000});
      return false;
    }

    

    // Register user
    this.authService.registerUser(user).subscribe(data => {
    if(data.success) {
      console.log(data.userid);
      this.authService.addpolicestat(data.userid).subscribe(data => {
              console.log("police stat added");
      });  

      this.flashMessage.show('Police station registered and can now login', {cssClass: 'alert-success', timeout: 3000});
      this.router.navigate(['/plogin']);
    } else {
      this.flashMessage.show('Something went wrong', {cssClass: 'alert-danger', timeout: 3000});
      this.router.navigate(['/pregister']);
    }
  });
  }
}
