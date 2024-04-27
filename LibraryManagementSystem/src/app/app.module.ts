import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatRippleModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { LoginComponent } from './login/login.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { BookManagementComponent } from './book-management/book-management.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { ReportGenComponent } from './report-gen/report-gen.component';

@NgModule({
  declarations: [AppComponent, WelcomePageComponent, LoginComponent, AdminHomeComponent, AdminHeaderComponent, BookManagementComponent, UserManagementComponent, ReportGenComponent],
  imports: [BrowserModule, AppRoutingModule, MatRippleModule, MatButtonModule],
  providers: [provideClientHydration(), provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {}
