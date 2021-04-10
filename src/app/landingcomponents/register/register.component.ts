import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  active = "active1";
  userData = {}

  constructor() { }

  ngOnInit(): void {
  }

}
