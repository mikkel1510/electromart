import { ProductType } from "../../../shared/dto/ProductType";
import { Product } from "./Product";

export class Laptop extends Product {
  constructor(title: string, imageUrl: string, basePrice: number) {
    super(title, imageUrl, basePrice);
    this.productType = ProductType.Laptop;
  }
}
