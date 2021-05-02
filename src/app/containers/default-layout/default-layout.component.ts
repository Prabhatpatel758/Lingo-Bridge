import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { navItems } from '../../_nav';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent {
  public sidebarMinimized = false;
  public navItems = navItems;
  constructor(private loginService: LoginService, private router: Router) { }
  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }
  logout = () => {
    this.loginService.logout();
    this.router.navigateByUrl('/home/login');
  }
}
