import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  active = "active1";
  constructor(private router: Router) { }
  dashboard = () => {
    this.router.navigateByUrl('/default');
  }
  ngOnInit(): void {
  }

}
