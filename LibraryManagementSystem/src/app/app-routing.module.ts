import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { BookManagementComponent } from './book-management/book-management.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { ReportGenComponent } from './report-gen/report-gen.component';

const routes: Routes = [
  { path: '', redirectTo: 'welcomePage', pathMatch: 'full' },
  { path: 'welcomePage', component: WelcomePageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'adminHome', component: AdminHomeComponent },
  { path: 'bookManagement', component: BookManagementComponent},
  { path: 'userManagement', component: UserManagementComponent},
  { path: 'reportGeneration', component: ReportGenComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
