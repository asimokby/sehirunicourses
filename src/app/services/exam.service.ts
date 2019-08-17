import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExamService {

  baseurl = "http://127.0.0.1:8000";
  httpHeaders = new HttpHeaders({'content-Type': 'application/json'});
   constructor(private http: HttpClient) { }
   ngOnInit() {
   }
  getExamsByCourseId(course_id:string): Observable<any> {
    return this.http.get(this.baseurl + '/exams/' + course_id + '/', {headers:this.httpHeaders});
  }
}
