import { CompletionStatus as CompletionStatusEnum } from "@/types/CompletionStatus.ts";

interface CompletionStatusProps {
  completionStatus: CompletionStatusEnum;
}
function CompletionStatus({ completionStatus }: CompletionStatusProps) {
  return (
    <span>
      {completionStatus === CompletionStatusEnum.Uncompleted
        ? "Uncompleted"
        : "Completed"}
    </span>
  );
}

export default CompletionStatus;
