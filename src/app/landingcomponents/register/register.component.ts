import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  active = "active1";
  userData = { firstName: '', lastName: '', email: '', password: '', cofirmPassword: '', termsAndCondition: '' }

  constructor() { }

  ngOnInit(): void {
  }

}
