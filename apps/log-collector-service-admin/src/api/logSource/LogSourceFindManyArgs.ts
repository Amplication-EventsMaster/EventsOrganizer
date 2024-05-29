import { LogSourceWhereInput } from "./LogSourceWhereInput";
import { LogSourceOrderByInput } from "./LogSourceOrderByInput";

export type LogSourceFindManyArgs = {
  where?: LogSourceWhereInput;
  orderBy?: Array<LogSourceOrderByInput>;
  skip?: number;
  take?: number;
};
