import type { CompletionStatus } from "@/types/CompletionStatus.ts";
import { v4 as uuidv4 } from "uuid";

export class Task {
  id = uuidv4();
  constructor(
    public name: string,
    public completionStatus: CompletionStatus,
  ) {}
}
