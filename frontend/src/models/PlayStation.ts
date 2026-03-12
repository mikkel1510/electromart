import { Product } from "./Product";
import { ProductType } from "./ProductType";

export class PlayStation extends Product{
  discountRate = 0.1
  taxRate = 1.15
  productType = ProductType.PlayStation
}
