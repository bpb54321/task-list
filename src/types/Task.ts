import { CompletionStatus } from "@/types/CompletionStatus.ts";
import { v4 as uuidv4 } from "uuid";

export class Task {
  id = uuidv4();
  constructor(
    public name: string,
    public completionStatus: CompletionStatus,
  ) {}

  isCompleted() {
    return this.completionStatus === CompletionStatus.Completed;
  }

  getOppositeCompletionStatus(
    completionStatus: CompletionStatus,
  ): CompletionStatus {
    return completionStatus === CompletionStatus.Completed
      ? CompletionStatus.Uncompleted
      : CompletionStatus.Completed;
  }

  copy(shouldToggleCompletionStatus: boolean): Task {
    return new Task(
      this.name,
      shouldToggleCompletionStatus
        ? this.getOppositeCompletionStatus(this.completionStatus)
        : this.completionStatus,
    );
  }
}
