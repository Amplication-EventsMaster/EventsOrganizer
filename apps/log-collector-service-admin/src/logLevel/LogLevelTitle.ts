import { LogLevel as TLogLevel } from "../api/logLevel/LogLevel";

export const LOGLEVEL_TITLE_FIELD = "name";

export const LogLevelTitle = (record: TLogLevel): string => {
  return record.name?.toString() || String(record.id);
};
