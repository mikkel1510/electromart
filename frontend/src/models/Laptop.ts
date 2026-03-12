import { Product } from "./Product";
import { ProductType } from "./ProductType";
import { config } from "../config";

export class Laptop extends Product {
    constructor(title: string, imageUrl: string, basePrice: number){
      super(title, imageUrl, basePrice, ProductType.Laptop)
    }
}
