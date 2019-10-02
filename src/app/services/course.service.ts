import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

baseurl = "https://sehirunicourses.herokuapp.com";
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
