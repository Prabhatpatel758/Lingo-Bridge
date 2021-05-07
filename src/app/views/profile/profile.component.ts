import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user = { fullName: 'Prabhat Patel', emilId: 'abc@gmail.com', qualification: 'btech', profession: 'product developer' };
  cred = { oldPassword: '', newPassword: '', confirmPassword: '' };
  isDisabled: boolean = true;
  isChangePassword: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  enableForm = () => {
    this.isDisabled = false;
  }
  changePassword = () => {
    console.log('hi');
    this.isChangePassword = !this.isChangePassword;
  }
}
