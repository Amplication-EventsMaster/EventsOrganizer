import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type FeedbackUpdateInput = {
  category?: CategoryWhereUniqueInput | null;
  content?: string | null;
  product?: ProductWhereUniqueInput | null;
  rating?: number | null;
  user?: UserWhereUniqueInput | null;
};
