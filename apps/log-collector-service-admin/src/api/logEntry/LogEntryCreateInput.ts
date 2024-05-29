export type LogEntryCreateInput = {
  comment?: string | null;
  level?: string | null;
  message?: string | null;
  source?: string | null;
  timestamp?: Date | null;
};
