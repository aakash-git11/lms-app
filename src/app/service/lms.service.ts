import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LmsService {

  private BaseUrl:string="https://localhost:5050";
  constructor(private httpClient: HttpClient) { }

userLogin(loginData:any){
    console.log(loginData.value);
    return this.httpClient.post<any>(this.BaseUrl+"/api/lms/user/login",loginData.value)
  }
getAllCourses(){
    return this.httpClient.get<any>(this.BaseUrl+"/api/course/getall");
  }
getCoursesByTechnology(technology:string){
  return this.httpClient.get<any>(this.BaseUrl+"/api/course/getbytechnology/"+technology);  
}
getCoursesByDurationAndTechnology(technology:string,durationFromRange:number,durationToRange:number){
  return this.httpClient.get<any>(this.BaseUrl+"/api/course/getbytechnologyandduration/"
  +technology
  +"/"
  +durationFromRange
  +"/"
  +durationToRange);
}
}
