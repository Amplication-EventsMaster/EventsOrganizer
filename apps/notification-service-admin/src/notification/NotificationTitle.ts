import { Notification as TNotification } from "../api/notification/Notification";

export const NOTIFICATION_TITLE_FIELD = "customer";

export const NotificationTitle = (record: TNotification): string => {
  return record.customer?.toString() || String(record.id);
};
