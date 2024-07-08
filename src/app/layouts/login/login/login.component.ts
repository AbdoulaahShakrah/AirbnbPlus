import { Component } from '@angular/core';
import { Login } from '../../../interfaces/Login';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [
    './login.component.css',
  ],
})
export class LoginComponent {
  loginObj: Login
  loginError: boolean = false
  errorMessage = "email ou password invalidos, por favor tente novamente!"
  
  constructor(private http:HttpClient, private router: Router){
    this.loginObj = new Login();
    console.log(this.loginObj.EmailId);

  }
  onLogin(): void {
    this.http.post('/api/User/Login', this.loginObj)
      .subscribe((res: any) => {
        if (res.result) {
          this.router.navigateByUrl('/my-properties')
          console.log(res.result);
        } else {
          this.loginError = true;
        }
      });
  }
  
  onBack(): void{
    this.router.navigateByUrl('/home-page');
  }
}
