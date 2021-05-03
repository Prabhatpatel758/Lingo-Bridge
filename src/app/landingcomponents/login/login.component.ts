import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router'
import { SearchCountryField, CountryISO } from 'ngx-intl-tel-input';
import { LoginService } from '../../../app/services/login.service';
import { CountdownComponent } from 'ngx-countdown';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  active = "active1";
  userData = { email: '', password: '', cofirmPassword: '' }
  user = { phoneNumber: '', email: '' };
  isCreateAccount = false;
  isShowemail = false;
  isShowOtpHolder = false;
  isShowResendButton = false;
  isLogin = false;
  error = '';

  separateDialCode = true;
  SearchCountryField = SearchCountryField;
  placeholder = "Enter you phone number";
  CountryISO = CountryISO;

  preferredCountries: CountryISO[] = [CountryISO.India, CountryISO.UnitedStates, CountryISO.UnitedKingdom];
  @ViewChild('cd', { static: false }) private countdown: CountdownComponent;
  @ViewChild('phoneNumber')
  public phoneNumber;

  constructor(private router: Router, private loginService: LoginService) { }

  signIn() {
    // if ((this.user.phoneNumber != "" && this.user.phoneNumber != null) || this.user.email != "" && this.user.email != null) {
    //   this.loginService.generateToken(this.user).subscribe(
    //     (response: any) => {
    //       console.log(response.token);
    //       this.loginService.loginUser(response.token);
    //       this.router.navigateByUrl('/default');
    //     },
    //     error => {
    //       console.log(error);
    //     }
    //   );
    // }

    this.loginService.loginUser("prabhat");
    this.router.navigateByUrl('/default');
  }
  isOtpSendsuccessfully = true;
  isError = false;
  isdisabled = false;
  signUp = () => {
    console.log(this.user.phoneNumber)
    if (this.isOtpSendsuccessfully) {
      this.isdisabled = true;
      // this.phoneNumber.elRef.nativeElement.firstChild.children[0].disabled = 'true';

      this.isShowOtpHolder = true;
      this.isShowResendButton = false;
      this.startCounter()
    }
    else {
      this.error = "something went wrong!";
      this.isError = true;
    }
  }
  verify = () => {

  }
  ngOnInit(): void {
  }

  //to show create account button
  createaccount() {
    this.isCreateAccount = true;
  }

  //to show login button
  showlogin() {
    this.isCreateAccount = false;
  }

  // to show email box for login only
  showemail() {
    this.isShowemail = true;
  }

  // to show phone number box for login or create account
  showphonenumber() {
    this.isShowemail = false;
  }

  //to show resend button for timer
  handleEvent = (event) => {
    if (event.action === 'done') {
      this.isShowResendButton = true;
    }
  }

  //to start the timer
  startCounter = () => {
    setTimeout(() => {
      this.countdown.begin();
    })
  }

  edit = () => {
    this.isdisabled = false;
    this.isShowOtpHolder = false;
  }
  states = ["Saab", "Volvo", "BMW"];
  getAllstates() {

  }

}
