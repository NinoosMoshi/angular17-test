import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ICourse } from '../../model/course/icourse';

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css',
})
export class CourseCardComponent {
  // @Input() title: string = '';
  // @Input() description: string = '';
  // @Input() image: string = '';

  @Input({ required: true }) course: ICourse = {} as ICourse;
  @Input({ required: true }) tempIndex!: number;

  @Output() viewCourseEvent = new EventEmitter<ICourse>();

  onViewCourse() {
    this.viewCourseEvent.emit(this.course);
  }
}
