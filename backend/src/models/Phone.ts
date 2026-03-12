import { Product } from "./Product";
import { ProductType } from "../../../shared/dto/ProductType";

export class Phone extends Product {
  constructor(title: string, imageUrl: string, basePrice: number) {
    super(title, imageUrl, basePrice);
    this.productType = ProductType.Phone;
  }
}
