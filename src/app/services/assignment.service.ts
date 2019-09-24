import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AssignmentService {

  // baseurl = "http://127.0.0.1:8000";
  // baseurl = "http://fakesehir.tk/api";
  baseurl = "https://sehirunicourses.herokuapp.com";
  httpHeaders = new HttpHeaders({'content-Type': 'application/json'});
   constructor(private http: HttpClient) { }
   ngOnInit() {
   }
  getAssignmentsByCourseId(course_id:string): Observable<any> {
    return this.http.get(this.baseurl + '/assignments/' + course_id + '/', {headers:this.httpHeaders})
  }
}
