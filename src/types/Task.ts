import { v4 as uuidv4 } from "uuid";

export class Task {
  id = uuidv4();
  constructor(
    public name: string,
    public isCompleted: boolean,
  ) {}

  copy(): Task {
    return new Task(this.name, this.isCompleted);
  }

  copyWithToggledStatus(): Task {
    return new Task(this.name, !this.isCompleted);
  }
}
