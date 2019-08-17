import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  navStateAbout: string;
  navStateCourses: string;
  navStateContact: string;
  current_path: string;

  constructor(private location: Location) { }

  ngOnInit() {
    this.navStateCourses = "active";
    this.current_path = this.location.path();
    if (this.current_path === "/courses"){
    this.navStateCourses = "active";
    }
    else if (this.current_path === "/about") {
      this.navStateAbout = "active"
    }
    else if (this.current_path === "/contact") {
      this.navStateContact = "active"
    }
    
  }


  coursesClicked(){
    this.navStateCourses = "active";
    this.navStateAbout = "notactive";
    this.navStateContact = "notactive";
  }

  aboutClicked(){
    this.navStateAbout = "active";
    this.navStateCourses = "notactive";
    this.navStateContact = "notactive";
  }

  contactClicked(){
    this.navStateContact = "active";
    this.navStateAbout = "notactive";
    this.navStateCourses = "notactive";
  }
}
