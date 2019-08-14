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

  // courses =
  // [
  //       {id: 1
  //       ,name: "Algorithms",
  //       code: "CS200",
  //       building: 1,
  //       room: 4013,
  //       teacher: "Baysan"}

  // ];
  courses;
  constructor(private courseService: CourseService, private router: Router) { }

  ngOnInit() {
    this.getCourses();
    console.log(this.courses)
    // this.courseService.getAllCourses().subscribe(error => console.log(error))
  }

  getCourses(){
    this.courses = this.courseService.getAllCourses().subscribe(data => {this.courses = data;});

  }
 
  btnClick(id:string){
    this.router.navigate(['/courses/'+ id])
  }

}
