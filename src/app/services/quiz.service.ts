import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  baseurl = "https://sehirunicourses.herokuapp.com"
  
  httpHeaders = new HttpHeaders({'content-Type': 'application/json'});
   constructor(private http: HttpClient) { }
   ngOnInit() {
   }
  getQuizesByCourseId(course_id:string): Observable<any> {
    return this.http.get(this.baseurl + '/quizes/' + course_id + '/', {headers:this.httpHeaders})
  }
}
