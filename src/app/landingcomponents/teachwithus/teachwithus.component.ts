import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-teachwithus',
  templateUrl: './teachwithus.component.html',
  styleUrls: ['./teachwithus.component.scss']
})
export class TeachwithusComponent implements OnInit {
  active = "active1";
  constructor(private router: Router) { }

  applynow() {
    this.router.navigateByUrl('/');
  }
  ngOnInit(): void {
  }

}
