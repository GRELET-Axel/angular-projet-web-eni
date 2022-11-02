import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLoggedInhere$: BehaviorSubject<boolean> | undefined;//= new BehaviorSubject<boolean>(coerceBooleanProperty(localStorage.getItem(this.localstorageKeys.isLoggedIn)));

  constructor() { }
logincomponent: LoginComponent | undefined;
  ngOnInit(): void {

    this.isLoggedInhere$ = this.logincomponent?.isLoggedIn$;
  }

}
