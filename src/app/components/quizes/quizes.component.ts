import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-quizes',
  templateUrl: './quizes.component.html',
  styleUrls: ['./quizes.component.css']
})
export class QuizesComponent implements OnInit {

  @Input() quizes;
  constructor() { }

  ngOnInit() {
  
  }

}
