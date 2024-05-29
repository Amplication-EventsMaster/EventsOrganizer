export type LogEntry = {
  comment: string | null;
  createdAt: Date;
  id: string;
  level: string | null;
  message: string | null;
  source: string | null;
  timestamp: Date | null;
  updatedAt: Date;
};
