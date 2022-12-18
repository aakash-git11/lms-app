import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FetchCoursesComponent } from './fetch-courses/fetch-courses.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'fetchcourses',component:FetchCoursesComponent}
  ];
  
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
