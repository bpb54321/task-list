import { v4 as uuidv4 } from "uuid";

export class Task {
  id = uuidv4();
  constructor(
    public name: string,
    public isCompleted: boolean,
  ) {}

  copy(shouldToggleCompletionStatus: boolean): Task {
    return new Task(
      this.name,
      shouldToggleCompletionStatus ? !this.isCompleted : this.isCompleted,
    );
  }
}
