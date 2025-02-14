import { Component } from '@angular/core'
import { RouterModule } from '@angular/router'
import { ReactiveFormsModule } from '@angular/forms'

@Component({
  selector: 'dashboard',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule],
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export default class TaskListComponent {}
