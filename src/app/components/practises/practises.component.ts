import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-practises',
  templateUrl: './practises.component.html',
  styleUrls: ['./practises.component.css']
})
export class PractisesComponent implements OnInit {
  @Input() practises;
  constructor() { }

  ngOnInit() {
   
  }

}
