import { Category } from "../category/Category";
import { Product } from "../product/Product";
import { User } from "../user/User";

export type Feedback = {
  category?: Category | null;
  content: string | null;
  createdAt: Date;
  id: string;
  product?: Product | null;
  rating: number | null;
  updatedAt: Date;
  user?: User | null;
};
