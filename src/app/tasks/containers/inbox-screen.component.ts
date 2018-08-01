import { Component, OnInit, Input } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { TasksState, ArchiveTask, PinTask } from '../state/task.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'inbox-screen',
  template: `
    <div *ngIf="error$ | async" class="page lists-show">
      <div class="wrapper-message">
        <span class="icon-face-sad"></span>
        <div class="title-message">Oh no!</div>
        <div class="subtitle-message">Something went wrong</div>
      </div>
    </div>

    <div *ngIf="!(error$ | async)" class="page lists-show">
      <nav>
        <h1 class="title-page">
          <span class="title-wrapper">Taskbox</span>
        </h1>
      </nav>
      <connected-task-list></connected-task-list>
    </div>
  `,
})
export class InboxScreenComponent implements OnInit {
  @Select(TasksState.getError) error$: Observable<any>;

  constructor(private store: Store) {}

  ngOnInit() {}

  archiveTask(id) {
    this.store.dispatch(new ArchiveTask(id));
  }

  pinTask(id) {
    this.store.dispatch(new PinTask(id));
  }
}
