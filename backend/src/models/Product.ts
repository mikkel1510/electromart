import { ProductType } from "../../../shared/dto/ProductType";
import { productConfig } from "../productInformation/ProductConfig";

export abstract class Product {
  public title: string;
  public imageUrl: string;
  public basePrice: number;
  public productType: ProductType = ProductType.Default;

  constructor(title: string, imageUrl: string, basePrice: number) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.basePrice = basePrice;

  }

  public getPrice(): number {
    return Math.round(this.basePrice * Math.max(0,(1 - this.getDiscountRate())) * this.getTaxRate());
  }

  public getPriceWithoutTaxes(): number {
    return Math.round(this.basePrice * Math.max(0, 1 - this.getDiscountRate()));
  }

  public getDiscountRate(): number {
    return productConfig[this.productType]?.discountRate ?? 0;
  }

  public getTaxRate(): number {
    return productConfig[this.productType]?.taxRate ?? 0;
  }
}
