export type Notification = {
  createdAt: Date;
  customer: string | null;
  id: string;
  message: string | null;
  sentStatus: boolean | null;
  updatedAt: Date;
};
