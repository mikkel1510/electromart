import { config } from "../config";
import { ProductType } from "./ProductType";

export abstract class Product {
  public title: string;
  public imageUrl: string;
  public basePrice: number;
  public taxRate!: number;
  public discountRate!: number;
  public productType!: ProductType;

  constructor(title: string, imageUrl: string, basePrice: number, productType: ProductType){
    this.title = title; 
    this.imageUrl = imageUrl; 
    this.basePrice = basePrice;
    this.productType = productType;
    this.discountRate = config.discountRate[this.productType];
    this.taxRate = config.taxRate[this.productType]
  }

  public getPrice(): number {
    return Math.round((this.basePrice * (1 - this.discountRate)) * this.taxRate);
  }
}