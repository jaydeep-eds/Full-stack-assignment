import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService:AuthService,private route:Router){

  }
  canActivate() {
    if(this.authService.IsLoggedIn()){
      return true
    }
    else{
      this.route.navigate([''])
      return false;
    }
    
  }
  
}
