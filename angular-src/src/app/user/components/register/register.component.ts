import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../services/validate.service';
import { UserserviceService } from '../../services/userservice.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { AuthService } from "angular4-social-login";
import { SocialUser } from "angular4-social-login";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  name: String;
  username: String;
  email: String;
  password: String;

  constructor(
    private validateService: ValidateService,
    private authService: UserserviceService,
    private router: Router,
    private flashMessage: FlashMessagesService,
    private authService1: AuthService,
) { }

  ngOnInit() {
  }
  SignInFacebook(){
    this.authService.signInWithFB();
    this.authService1.authState.subscribe((user)=>{
      this.username = user.firstName;
      this.name = user.name;
      this.email = user.email;
      this.password = user.id;
    });
    this.onRegisterSubmit();
  }
  SignInGoogle(){
    this.authService.signInWithGoogle();
    this.authService1.authState.subscribe((user)=>{
      this.username = user.firstName;
      this.name = user.name;
      this.email = user.email;
      this.password = user.id;
    });
    this.onRegisterSubmit();
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

    const user123 = {
      username: this.username,
      password: this.password
    }

    this.authService.authenticateUser(user123).subscribe(data => {
        if(data.success) {
          this.authService.storeUserData(data.token, data.user);
          this.flashMessage.show('You are already registered to this web Application', {cssClass: 'alert-success', timeout: 5000});
          this.router.navigate(['login']);
        } else {
            // Register user
        this.authService.registerUser(user).subscribe(data => {
        if(data.success) {
          this.flashMessage.show('You are now registered and can now login', {cssClass: 'alert-success', timeout: 3000});
          this.router.navigate(['/dashboard']);
        } else {
          this.flashMessage.show('Something went wrong', {cssClass: 'alert-danger', timeout: 3000});
          this.router.navigate(['/register']);
        }
        });   
        }
    });
  }
}
