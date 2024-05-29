import { LogEntry as TLogEntry } from "../api/logEntry/LogEntry";

export const LOGENTRY_TITLE_FIELD = "level";

export const LogEntryTitle = (record: TLogEntry): string => {
  return record.level?.toString() || String(record.id);
};
