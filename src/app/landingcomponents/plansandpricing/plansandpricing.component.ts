import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-plansandpricing',
  templateUrl: './plansandpricing.component.html',
  styleUrls: ['./plansandpricing.component.scss']
})
export class PlansandpricingComponent implements OnInit {
  active = "active1";
  constructor(private router: Router) { }
  // signInBtnClick() {

  //   this.router.navigateByUrl('/');
  // }
  ngOnInit(): void {
  }
  navigateToLogin() {
    this.router.navigateByUrl('home/login');
  }
}
