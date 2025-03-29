import { Component } from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-forms',
  standalone: true,
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css'],
  imports: [ReactiveFormsModule],
})



export class FormsComponent {
task = new FormControl(''); 
  tasks: string[] = [];

  addTask() {
    const taskValue = this.task.value?.trim(); // Get and trim input value
    if (taskValue) {
      this.tasks = [...this.tasks, taskValue]; // Add task to list
      this.task.reset(); // Clear input field
    }
  }

  removeTask(index: number) {
    this.tasks.splice(index, 1); // Remove task from the list
  }
}

