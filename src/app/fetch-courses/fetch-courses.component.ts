import { Component, OnInit } from '@angular/core';
import { LmsService } from '../service/lms.service';

@Component({
  selector: 'app-fetch-courses',
  templateUrl: './fetch-courses.component.html',
  styleUrls: ['./fetch-courses.component.css']
})
export class FetchCoursesComponent implements OnInit {
  CourseList: any;
  searchText: string = "";
  TechnologyList: string[] = new Array("Frontend", "Backend", "Database", "Cloud");
  flag: boolean = false;
  selectedTechnology: any;
  selectedDuration:any;

  constructor(private readonly lmsservice: LmsService) { }

  ngOnInit(): void {   
  }

  SortCoursesByDuration() {
    if (this.selectedTechnology == null && this.selectedTechnology == undefined) {
      alert('please select technology first!');
    }
    else{
      let durationArr=this.selectedDuration.split('-');
      this.lmsservice.getCoursesByDurationAndTechnology(this.selectedTechnology,durationArr[0],durationArr[1]).subscribe(response=>{
        console.log(response);
        if (response.isSuccess) {
          this.CourseList = response.result;
          this.flag = true;
        }
        else {
          this.flag = false;
        }
      })
    }   
  }

  sortByTechnology() {
    if (this.selectedTechnology != null && this.selectedTechnology != undefined) {
      this.lmsservice.getCoursesByTechnology(this.selectedTechnology).subscribe(response => {
        console.log(response);
        if (response.isSuccess) {
          this.CourseList = response.result;
          this.flag = true;
        }
        else {
          this.flag = false;
        }
        console.log(this.CourseList);
      })
    }
    this.selectedDuration=undefined;
  }
  searchByTechnology() {
    console.log(this.searchText);
    if (this.searchText == '') {
      alert('please enter technology');
    }
    else {
      this.lmsservice.getCoursesByTechnology(this.searchText).subscribe(response => {
        if (response.isSuccess) {
          this.CourseList = response.result;
          this.flag = true;
        }
        else {
          this.flag = false;
        }
      })
    }
    this.selectedTechnology=undefined;
    this.selectedDuration=undefined;
  }
}
