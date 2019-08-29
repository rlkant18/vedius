import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userloggedin: boolean = true;

  constructor(private router: Router) {}

  username: string;
  password: string;

  ngOnInit() {
    this.userloggedin = true;
  }
  login(): void {
    if (
      this.username == 'admin' &&
      this.password == 'admin'
    ) {
      this.router.navigate(['app-product']);
    } else {
      alert('Invalid credentials');
    }
  }
}
