import { Feedback as TFeedback } from "../api/feedback/Feedback";

export const FEEDBACK_TITLE_FIELD = "title";

export const FeedbackTitle = (record: TFeedback): string => {
  return record.title?.toString() || String(record.id);
};
