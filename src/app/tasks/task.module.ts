import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxsModule } from '@ngxs/store';

import { TaskComponent } from './components/task.component';
import { TaskListComponent } from './components/task-list.component';
import { TasksState } from './state/task.state';
import { InboxScreenComponent } from './containers/inbox-screen.component';

@NgModule({
  imports: [CommonModule, NgxsModule.forFeature([TasksState])],
  exports: [TaskComponent, TaskListComponent, InboxScreenComponent],
  declarations: [TaskComponent, TaskListComponent, InboxScreenComponent],
  providers: [],
})
export class TaskModule {}
