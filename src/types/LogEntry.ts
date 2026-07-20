export type LogEntry = {
  status: "OK" | "ERROR" | "WARN";
  message: string;
};
