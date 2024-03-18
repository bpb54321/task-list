import { Badge } from "@radix-ui/themes";

interface CompletionStatusProps {
  isCompleted: boolean;
}
function CompletionStatus({ isCompleted }: CompletionStatusProps) {
  return (
    <Badge color={isCompleted ? "green" : "indigo"}>
      {isCompleted ? "Completed" : "Not completed"}
    </Badge>
  );
}

export default CompletionStatus;
