import { Component } from '@angular/core';
// import { FormBuilder,FormGroup } from '@angular/forms';
// import { AuthService } from './auth.service';
// import { HttpClient } from '@angular/common/http';
// import { Router } from '@angular/router';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // loginForm: FormGroup;

  // constructor(private authService: AuthService, private fb: FormBuilder,private router: Router) {
  //   this.loginForm = this.fb.group({
  //     username: [''],
  //     password: ['']
  //   });
  // }

  // onSubmit() {
  //   const { username, password } = this.loginForm.value;
  //   this.authService.login(username, password).subscribe(
  //     response => {
  //       console.log('Login successful:', response);
  //       this.router.navigate(['/home-component']);
  //     },
  //     error => {
  //       console.error('Login failed:', error);
  //     }
  //   );
  // }
  showHeaderFooter: boolean = true;

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.showHeaderFooter = event.url !== '/login';
    });
  }
  navigateToLogin() {
    this.router.navigate(['/login']);
  }
}
