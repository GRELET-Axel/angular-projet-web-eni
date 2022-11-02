import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLoggedInhere$: BehaviorSubject<boolean> | undefined;

  constructor(private router:Router) { }
logincomponent: LoginComponent | undefined;
  ngOnInit(): void {
    
    this.isLoggedInhere$ = this.logincomponent?.isLoggedIn$;
  }
  isActive() {
    return !this.logincomponent?.isLoggedIn$;
    }

    clickdeco(){
      
      localStorage.setItem("isLoggedIn",'false')
      
      this.router.navigate(['/login']);

    }

}
