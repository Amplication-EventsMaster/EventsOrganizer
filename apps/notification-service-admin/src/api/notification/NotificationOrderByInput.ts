import { SortOrder } from "../../util/SortOrder";

export type NotificationOrderByInput = {
  createdAt?: SortOrder;
  customer?: SortOrder;
  id?: SortOrder;
  message?: SortOrder;
  sentStatus?: SortOrder;
  updatedAt?: SortOrder;
};
