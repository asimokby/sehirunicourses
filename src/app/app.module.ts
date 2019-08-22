import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http' 
import { AppRoutingModule } from './app-routing.module';
import { MatTabsModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import {FormsModule} from "@angular/forms"; 
import { CommonModule } from '@angular/common';  
import { PdfViewerModule } from 'ng2-pdf-viewer';

import { AppComponent } from './app.component';
import { CoursesComponent } from './components/courses/courses.component';
import { CourseComponent } from './components/course/course.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { ExamsComponent } from './components/exams/exams.component';
import { NotesComponent } from './components/notes/notes.component';
import { AssignmentsComponent } from './components/assignments/assignments.component';
import { QuizesComponent } from './components/quizes/quizes.component';
import { PractisesComponent } from './components/practises/practises.component';
import { ContactComponent } from './components/contact/contact.component';
import { ViewPdfComponent } from './components/view-pdf/view-pdf.component';



@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent,
    HeaderComponent,
    AboutComponent,
    ExamsComponent,
    NotesComponent,
    AssignmentsComponent,
    QuizesComponent,
    PractisesComponent,
    ContactComponent,
    ViewPdfComponent,
    
    

   

  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatTabsModule,
    BrowserAnimationsModule,
    MatCardModule,
    FormsModule,
    CommonModule,
    PdfViewerModule,
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
