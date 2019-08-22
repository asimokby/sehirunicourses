import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoursesComponent } from './components/courses/courses.component';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { CourseComponent } from './components/course/course.component';
import { ContactComponent } from './components/contact/contact.component';
import {ViewPdfComponent } from './components/view-pdf/view-pdf.component';
const routes: Routes = [
  {path: '', redirectTo: '/courses', pathMatch: 'full'},
  {path:'courses', component:CoursesComponent},
  {path:'about', component: AboutComponent},
  {path:'contact', component: ContactComponent},
  {path:'courses/:id', component: CourseComponent},
  {path: 'file/:name', component: ViewPdfComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
