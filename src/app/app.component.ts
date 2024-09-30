import { Component, HostListener } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { UserInfoService } from './user-info.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showHeaderFooter: boolean = true;

  constructor(private router: Router, private userInfoService: UserInfoService) {}

  ngOnInit() {
    // Check token on load or refresh
    this.checkTokenOnLoad();

    // Listen to router events to toggle header and footer visibility
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.showHeaderFooter = event.url !== '/login';
    });
  }

  // Method to clear token when the page is refreshed
  @HostListener('window:beforeunload', ['$event'])
  clearTokenOnRefresh(event: Event) {
    this.userInfoService.clearToken();
  }

  // Check if the token exists on page load
  checkTokenOnLoad() {
    const token = this.userInfoService.getToken();
    if (!token) {
      this.router.navigate(['/login']);  // If no token, navigate to login
    }
  }

  // Method to navigate to login page
  navigateToLogin() {
    this.router.navigate(['/login']);
  }
    // Method to navigate to the 'bag' component
    goToBag() {
      this.router.navigate(['/bag']);
    }
}
