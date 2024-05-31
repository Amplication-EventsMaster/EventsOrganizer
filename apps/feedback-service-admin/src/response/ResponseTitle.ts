import { Response as TResponse } from "../api/response/Response";

export const RESPONSE_TITLE_FIELD = "responder";

export const ResponseTitle = (record: TResponse): string => {
  return record.responder?.toString() || String(record.id);
};
