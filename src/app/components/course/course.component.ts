import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from '../../services/course.service';
import { ExamService } from '../../services/exam.service';
import { NoteService } from '../../services/note.service';
import { AssignmentService } from '../../services/assignment.service';
import { QuizService } from '../../services/quiz.service';
import { PractiseService } from '../../services/practise.service';
@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {  
  id: string;

  course;
  exams:any = [];
  assignments: any = [];
  notes: any = [];
  quizes: any = [];
  practises: any = [];

  constructor(private route: ActivatedRoute, 
    private courseService: CourseService,
     private examService: ExamService,
     private noteService: NoteService,
     private assignmentService: AssignmentService,
     private quizService: QuizService,
     private practiseService: PractiseService,) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getCourseByid();
    this.getExams();
    this.getNotes();
    this.getAssignments();
    this.getQuizes();
    this.getPractises();
  }

  getCourseByid(){
    this.course = this.courseService.getCourseById(this.id).subscribe(data => this.course = data);
  }

  getExams(){
    this.examService.getExamsByCourseId(this.id).subscribe(data => this.exams = data);
  }

  getNotes(){
    this.noteService.getNotesByCourseId(this.id).subscribe(data => this.notes = data);
  }

  getAssignments(){
    this.assignmentService.getAssignmentsByCourseId(this.id).subscribe(data => this.assignments = data);
  }

  getQuizes(){
    this.quizService.getQuizesByCourseId(this.id).subscribe(data => this.quizes = data);
  }

  getPractises(){
    this.practiseService.getPractisesByCourseId(this.id).subscribe(data => this.practises = data);
  }


}
