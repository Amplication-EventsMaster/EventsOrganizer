import { LogEntryWhereInput } from "./LogEntryWhereInput";
import { LogEntryOrderByInput } from "./LogEntryOrderByInput";

export type LogEntryFindManyArgs = {
  where?: LogEntryWhereInput;
  orderBy?: Array<LogEntryOrderByInput>;
  skip?: number;
  take?: number;
};
