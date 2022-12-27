import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  messageClass:any;
  message:any;
  userId:any;
  responseData:any;
  editData:any

  constructor(
    private authService:AuthService,
    private router:Router
    ) {
    localStorage.clear();
  }

  Login = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });


  ngOnInit(): void {
  }

  ProceedLogin() {

    if(this.Login.valid){
      this.authService.proceedLogin(this.Login.value).subscribe(
        result => {
          if(result != null){
            this.responseData = result;
            localStorage.setItem('token',this.responseData.token);
            this.router.navigate(['/home']);
          }
        }
      )

    }
      
  }

}
