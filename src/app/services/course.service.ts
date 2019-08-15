import { Injectable } from '@angular/core';
import { Course } from '../models/course';
import { HttpHeaders, HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

 baseurl = "http://127.0.0.1:8000";
 httpHeaders = new HttpHeaders({'content-Type': 'application/json'});
  constructor(private http: HttpClient) { }
  ngOnInit() {
  }
  getAllCourses(): Observable<any> {
    return this.http.get(this.baseurl + '/courses/', {headers: this.httpHeaders});
  }
  
  getCourseById(id: string): Observable<any> {
    return this.http.get(this.baseurl + '/courses/' + id + '/', {headers:this.httpHeaders})
  }

}
