import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '@app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const credentials = this.loginForm.value;
      this.authService.login(credentials)
        .subscribe(
          response => {
            console.log('Login successful:', response);
            const userType = response.userType; // Assuming the response contains the userType
            if (userType === 'seller') {
              this.router.navigate(['/seller/dashboard']);
            } else {
              this.router.navigate(['/buyer/dashboard']);
            }
          },
          error => {
            console.error('Login error:', error);
          }
        );
    }
  }
}