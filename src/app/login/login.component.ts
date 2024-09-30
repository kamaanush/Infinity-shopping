import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { UserInfoService } from '../user-info.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  registerForm: FormGroup; // FormGroup for the registration form

  constructor(private authService: AuthService, private fb: FormBuilder, private router: Router,private userInfoService: UserInfoService) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
        // Initialize the registration form in the constructor
        this.registerForm = this.fb.group({
          email: ['', [Validators.required, Validators.email]],
          password: ['', [Validators.required, Validators.minLength(6)]],
          address: ['', Validators.required]
          // Add other form controls as needed
        });
  }
  ngOnInit() {
    // Check if user is logged in by checking token on component init (after refresh)
    const token = this.userInfoService.getToken();
    if (!token) {
      this.logout(); // Logout if no token is present
    }
  }
  get username() {
    return this.loginForm.get('username');
  }

  get password() {
    return this.loginForm.get('password');
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }
  
    const { username, password } = this.loginForm.value;
    this.authService.login(username, password).subscribe(
      response => {
        console.log('Login successful:', response);
        const token = response.accessToken; // Use the accessToken from the response
        this.userInfoService.setToken(token);  // Store the token in localStorage
        this.router.navigate(['/home-component']);
      },
      error => {
        console.error('Login failed:', error);
      }
    );
  }
  
 // Method to handle registration submission
 onRegister() {
  if (this.registerForm.invalid) {
    return;
  }

  // Handle registration logic
  console.log('Registration successful', this.registerForm.value);

  // Reset the registration form after successful registration
  this.registerForm.reset();
}

// Logout function to clear token and navigate to login
logout() {
  this.userInfoService.clearToken();  // Clear token from localStorage
  this.router.navigate(['/login']);   // Redirect to login page
}
}
