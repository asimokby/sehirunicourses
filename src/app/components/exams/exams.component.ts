import { Component, OnInit, Input } from '@angular/core';



@Component({
  selector: 'app-exams',
  templateUrl: './exams.component.html',
  styleUrls: ['./exams.component.css']
})
export class ExamsComponent implements OnInit {;
  @Input() exams;
  constructor() { }
  ngOnInit() {
  }
}
