import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../../services/userservice.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { AuthService } from "angular4-social-login";
import { SocialUser } from "angular4-social-login";
import { ValidateService } from '../../services/validate.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: String;
  password: String;
  name : String;
  email : String;
  public user: SocialUser;
  public loggedIn: boolean;
  public logg:boolean;

  constructor(
    private authService: UserserviceService,
    private router: Router,
    private flashMessage: FlashMessagesService,
    private authService1: AuthService,
    private validateService:ValidateService
    ) { 
      this.logg=false;
      
    }

  ngOnInit() {
    
  }

  getLoggedIn(){
    this.authService1.authState.subscribe((user)=>{
      this.user = user;
    });
    if(this.user==null){
      
    }else{
      this.username = this.user.firstName;
      this.password = this.user.id;
      const user = {
        username: this.username,
        password: this.password
      }
  
      this.authService.authenticateUser(user).subscribe(data => {
          if(data.success) {
            this.authService.storeUserData(data.token, data.user);
            this.flashMessage.show('You are now logged in', {cssClass: 'alert-success', timeout: 5000});
            this.router.navigate(['dashboard']);
          } else {
            this.name=this.user.name;
            this.email = this.user.email;
            this.addUser();
          }
      });
    }
  }
  SignInFacebook(){
    this.authService.signInWithFB();
    this.logg = true;
    this.getLoggedIn();
  }
  SignInGoogle(){
    this.authService.signInWithGoogle();
    this.logg = true;
    this.getLoggedIn();
  }
  addUser(){
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
      this.flashMessage.show('You are now registered', {cssClass: 'alert-success', timeout: 3000});
      this.router.navigate(['dashboard']);
    } else {
      this.flashMessage.show('Something went wrong', {cssClass: 'alert-danger', timeout: 3000});
      this.router.navigate(['login']);
    }
  });
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
          this.router.navigate(['dashboard']);
        } else {
          this.flashMessage.show(data.msg, {cssClass: 'alert-danger', timeout: 5000});
          this.router.navigate(['login']);
        }
    });
  }

}
