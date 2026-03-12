import { ProductType } from "../../../shared/dto/ProductType";

export const productConfig = {
  [ProductType.Phone]: { taxRate: 1.25, discountRate: 0.15 },
  [ProductType.Laptop]: { taxRate: 1.25, discountRate: 0.15 },
  [ProductType.SSD]: { taxRate: 1.25, discountRate: 0.15 },
  [ProductType.PlayStation]: { taxRate: 1.25, discountRate: 0.15 },
  [ProductType.Default]: { taxRate: 1, discountRate: 0 }
};