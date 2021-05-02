import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url = 'https://localhost:3000';
  constructor(private http: HttpClient) { }

  //to generate the token
  generateToken = (user: any) => {
    return this.http.post(`${this.url}/token`, user);
  }

  // to logged in the user
  loginUser = (token) => {
    localStorage.setItem('token', token);
    return true;
  }

  // to check user is logged in or not
  isLoggedIn = () => {
    let token = localStorage.getItem('token');
    if (token == undefined || token === '' || token == null)
      return false;
    else
      return true;
  }

  //to logged out the user
  logout = () => {
    localStorage.removeItem('token');
    return true;
  }

  //to get the token
  getToken = () => {
    return localStorage.getItem('token');
  }
}
