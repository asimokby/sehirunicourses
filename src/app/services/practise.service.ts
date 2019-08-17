import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PractiseService {

  baseurl = "http://127.0.0.1:8000";
  httpHeaders = new HttpHeaders({'content-Type': 'application/json'});
   constructor(private http: HttpClient) { }
   ngOnInit() {
   }
  getPractisesByCourseId(course_id:string): Observable<any> {
    return this.http.get(this.baseurl + '/practises/' + course_id + '/', {headers:this.httpHeaders})
  }
}
