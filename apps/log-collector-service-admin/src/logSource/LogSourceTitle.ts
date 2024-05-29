import { LogSource as TLogSource } from "../api/logSource/LogSource";

export const LOGSOURCE_TITLE_FIELD = "name";

export const LogSourceTitle = (record: TLogSource): string => {
  return record.name?.toString() || String(record.id);
};
