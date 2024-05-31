import { SortOrder } from "../../util/SortOrder";

export type ResponseOrderByInput = {
  content?: SortOrder;
  createdAt?: SortOrder;
  feedbackId?: SortOrder;
  id?: SortOrder;
  responder?: SortOrder;
  updatedAt?: SortOrder;
};
