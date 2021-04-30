import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { SearchCountryField, CountryISO } from 'ngx-intl-tel-input';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  active = "active1";
  userData = { email: '', password: '', cofirmPassword: '' }
  user = {};
  phoneNumber = "";
  isCreateAccount = false;
  isShowemail = false;

  separateDialCode = true;
  SearchCountryField = SearchCountryField;
  placeholder = "Enter you phone number";
  CountryISO = CountryISO;
  preferredCountries: CountryISO[] = [CountryISO.India, CountryISO.UnitedStates, CountryISO.UnitedKingdom];
  constructor(private router: Router) { }

  dashboard = () => {
    this.router.navigateByUrl('/default');
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
  submit(value) {
    console.log(value);
  }


}
