import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { SearchCountryField, CountryISO } from 'ngx-intl-tel-input';
import { LoginService } from '../../../app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  active = "active1";
  userData = { email: '', password: '', cofirmPassword: '' }
  user = { phoneNumber: '', email: '' };
  phoneNumber = "";
  isCreateAccount = false;
  isShowemail = false;

  separateDialCode = true;
  SearchCountryField = SearchCountryField;
  placeholder = "Enter you phone number";
  CountryISO = CountryISO;
  preferredCountries: CountryISO[] = [CountryISO.India, CountryISO.UnitedStates, CountryISO.UnitedKingdom];

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
  signUp = () => {
    console.log(this.user);
  }

  ngOnInit(): void {
  }


  createaccount() {
    this.isCreateAccount = true;
  }
  showlogin() {
    this.isCreateAccount = false;
  }

  showemail() {
    this.isShowemail = true;
  }
  showphonenumber() {
    this.isShowemail = false;
  }



}
