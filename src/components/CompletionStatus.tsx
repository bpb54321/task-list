import { Badge } from "@radix-ui/themes";

interface CompletionStatusProps {
  isCompleted: boolean;
}
function CompletionStatus({ isCompleted }: CompletionStatusProps) {
  return (
    <Badge color={isCompleted ? "green" : "indigo"}>
      {isCompleted ? "Completed" : "Uncompleted"}
    </Badge>
  );
}

export default CompletionStatus;
