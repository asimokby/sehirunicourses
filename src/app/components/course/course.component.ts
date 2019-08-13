import { Component, OnInit, Input } from '@angular/core';
import { Course } from 'src/app/models/course';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  code: string;
  @Input() course: Course;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.getCourseByCode();
    
  }

  getCourseByCode(){
    this.code = this.route.snapshot.paramMap.get('code');
    
  }

}
