import type { CompletionStatus } from "@/types/CompletionStatus.ts";

export interface Task {
  name: string;
  completionStatus: CompletionStatus;
}
