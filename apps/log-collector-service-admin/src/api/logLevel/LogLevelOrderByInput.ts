import { SortOrder } from "../../util/SortOrder";

export type LogLevelOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
};
