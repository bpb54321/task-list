import { CompletionStatus } from "./CompletionStatus.ts";

export interface Task {
  name: string;
  completionStatus: CompletionStatus;
}
