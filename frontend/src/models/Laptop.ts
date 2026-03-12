import { Product } from "./Product";
import { ProductType } from "./ProductType";

export class Laptop extends Product {
    discountRate = 0.95
    taxRate = 1.15
    productType = ProductType.Laptop
}
