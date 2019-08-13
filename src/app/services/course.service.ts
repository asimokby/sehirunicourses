import { Injectable } from '@angular/core';
import { Course } from '../models/course';


@Injectable({
  providedIn: 'root'
})
export class CourseService {

  courses:Course[] = [
    {code: "CS203", title: "Data Analsis"},
    {code: "CS200", title: "Algorithm"},
    {code: "CS200", title: "Algorithm"},
    {code: "CS200", title: "Algorithm"},
    {code: "CS200", title: "Algorithm"},
            
    
  ]



  constructor() { }
}
