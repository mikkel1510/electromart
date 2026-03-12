import { ProductType } from "../../../shared/dto/ProductType";
import { Product } from "./Product";

export class SSD extends Product {
  constructor(title: string, imageUrl: string, basePrice: number) {
    super(title, imageUrl, basePrice);
    this.productType = ProductType.SSD;
  }
}