interface CompletionStatusProps {
  isCompleted: boolean;
}
function CompletionStatus({ isCompleted }: CompletionStatusProps) {
  return <span>{isCompleted ? "Completed" : "Uncompleted"}</span>;
}

export default CompletionStatus;
