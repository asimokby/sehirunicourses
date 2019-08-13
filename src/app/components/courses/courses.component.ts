import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../services/course.service';
import { Course } from '../../models/course';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  courses: Course[]; 
  constructor(private courseService: CourseService, private router: Router) { }

  ngOnInit() {
    this.courses = this.courseService.courses
  }

 
  btnClick(code:string){
    this.router.navigate(['/courses/'+ code])
  }

}
