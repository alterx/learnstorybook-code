import { storiesOf, moduleMetadata } from '@storybook/angular';
import { Store, NgxsModule } from '@ngxs/store';
import { TasksState } from '../state/task.state';
import { TaskModule } from '../task.module';

storiesOf('ConnectedTaskList', module)
  .addDecorator(
    moduleMetadata({
      declarations: [],
      imports: [TaskModule, NgxsModule.forRoot([TasksState])],
      providers: [Store],
    }),
  )
  .add('default', () => {
    return {
      template: `
      <div style="padding: 3rem">
        <connected-task-list></connected-task-list>
      </div>
      `,
    };
  });
