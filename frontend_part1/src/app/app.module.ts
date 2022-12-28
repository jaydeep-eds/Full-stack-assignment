import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HomeComponent } from './home/component/home.component';
import { TokenInterceptorService } from './service/token-interceptor.service';
import { NavbarComponent } from './navbar/navbar.component';
import { StoreModule } from '@ngrx/store';
import { employeeReducer } from './home/reducers/home.reducers';
import { EffectsModule } from '@ngrx/effects';
import { HomeEffects } from './home/effects/home.effects';
import { EmployeeEffects } from './employee/effects';
import { RouterModule } from '@angular/router';
import { routes } from './employee/employee-routing.module';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    // HomeComponent,
    // NavbarComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forChild(routes),
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    StoreModule.forRoot({employee:employeeReducer}),
    EffectsModule.forRoot([HomeEffects,EmployeeEffects])
    

  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorService, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
