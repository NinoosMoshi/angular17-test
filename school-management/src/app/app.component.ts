import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CourseCardComponent } from './components/course-card/course-card.component';
import { CategoryType, ICourse } from './model/course/icourse';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CourseCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  project_title = 'school-management';

  courses: ICourse[] = [
    {
      id: 1,
      title: 'Java core',
      description: 'learn Java programming for begginer',
      image: 'assets/images/java.webp',
      category: CategoryType.begginers,
    },
    {
      id: 1,
      title: 'C++ core',
      description: 'learn C++ programming for begginer',
      image: 'assets/images/c++.jpg',
      category: CategoryType.begginers,
    },

    {
      id: 1,
      title: 'Python advanced',
      description: 'learn Python programming for advanced',
      image: 'assets/images/python.jpg',
      category: CategoryType.advanced,
    },
  ];

  javaCourse = this.courses[0];
  cPlasCourse = this.courses[1];
  pythonCourse = this.courses[2];

  showEvent(course: ICourse) {
    console.log(course.title);
  }
}
