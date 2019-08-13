import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoursesComponent } from './components/courses/courses.component';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { CourseComponent } from './components/course/course.component';

const routes: Routes = [
  {path: '', redirectTo: '/courses', pathMatch: 'full'},
  {path:'courses', component:CoursesComponent},
  {path:'about', component: AboutComponent},
  {path:'courses/:code', component: CourseComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
