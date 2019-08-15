import { Component, OnInit, Input } from '@angular/core';
import { Course } from 'src/app/models/course';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from '../../services/course.service';
@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  id: string;
  course;
  constructor(private route: ActivatedRoute, private courseService: CourseService) { }

  ngOnInit() {
    this.getCourseByid();
    
  }

  getCourseByid(){
    this.id = this.route.snapshot.paramMap.get('id');
    this.course = this.courseService.getCourseById(this.id).subscribe(data => this.course = data);
    
  }
  

}
