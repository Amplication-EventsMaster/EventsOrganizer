import { LogEntry as TLogEntry } from "../api/logEntry/LogEntry";

export const LOGENTRY_TITLE_FIELD = "comment";

export const LogEntryTitle = (record: TLogEntry): string => {
  return record.comment?.toString() || String(record.id);
};
