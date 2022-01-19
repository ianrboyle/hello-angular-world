import {Component} from "@angular/core"
//properties to tell angular how this component works
@Component({
  selector: 'courses',
  template: `<h2>{{ title}}</h2> 
  <ul>
    <li *ngFor="let course of courses"> {{course}} </li>
  </ul>`
})
// typescript class - PascalCase

export class CoursesComponent {
  title = "List of Courses";
  courses = ["Math", "History", "Literature"];
  getTitle() {
    return this.title
  }
  getCourses() {
    let myCourses = this.courses.map((course) => {
      return course
    })
    return myCourses
  }
}