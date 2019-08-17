import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../services/course.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  courses:any = [];
  constructor(private courseService: CourseService, private router: Router) { }

  ngOnInit() {
    this.getCourses();
  }

  getCourses(){
    this.courseService.getAllCourses().subscribe(data => this.courses = data);

  }
 
  btnClick(id:string){
    this.router.navigate(['/courses/'+ id])
  }

  checkInputName(searchText: string, courseName: string){
    if (courseName.toLowerCase().includes(searchText.toLowerCase())){
      return true;
    }
  }

  checkInputCode(searchText: string, courseCode: string){
    if (courseCode.toLowerCase().includes(searchText.toLowerCase())){
      return true;
    }
  }


}
