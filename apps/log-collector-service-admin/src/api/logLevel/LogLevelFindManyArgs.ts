import { LogLevelWhereInput } from "./LogLevelWhereInput";
import { LogLevelOrderByInput } from "./LogLevelOrderByInput";

export type LogLevelFindManyArgs = {
  where?: LogLevelWhereInput;
  orderBy?: Array<LogLevelOrderByInput>;
  skip?: number;
  take?: number;
};
