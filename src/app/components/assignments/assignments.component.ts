import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css']
})
export class AssignmentsComponent implements OnInit {

  @Input() assignments;
  constructor( ) { }

  ngOnInit() {

  }

 

}
