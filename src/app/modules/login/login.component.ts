import { Component, ViewChild } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminloginService } from 'src/app/services/adminlogin.service';
import { AuthserviceService } from 'src/app/services/authservice.service';
import { NotificationsService } from 'src/app/services/notifications.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public loginForm: UntypedFormGroup | any;
  /**
   * Life Cycle Method
   */
  constructor(
    private fb: UntypedFormBuilder,
    private router: Router,
    private loginservice: AdminloginService,
    public notificationsService: NotificationsService,
    public authService:AuthserviceService
  ) { }

  /**
   * Life cycle init method
   */
  public ngOnInit(): any {
    this.loginForm = this.fb.group({
      email: new UntypedFormControl(null, [Validators.email, Validators.required]),
      password: new UntypedFormControl(null, Validators.required),
    });
  }




  // /**
  //  * Angular Life Cycle Method
  //  */

  get f() {
    return this.loginForm.controls;
  }

  submitted = false;
  submitForm() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }

    const logindata = this.loginForm.value;
    this.loginservice.adminLogin(logindata).subscribe(
      (res: any) => {
        console.log(res);
     
        if (res.success) {

          this.authService.setLoginStatus(true); 
          this.router.navigate(['/dashboard']);

          //Show This is the toaster if there is the success 
          this.notificationsService.showSuccess(res.message, null);

          console.log('Login successful');

          // Store the token in session storage
          sessionStorage.setItem("Token", res.data.token);

          // Redirect to the dashboard

        }

        else {
          //If error is occur then show the error toaster
          this.notificationsService.showError(res.message, null);
        }
      },
      error => {
        console.error('Login error', error);
      }
    );
  }


}
