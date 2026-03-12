import { timeEnd } from "console";
import { ProductType } from "./ProductType";

export class Product {
    public title: string;
    public imageUrl: string;
    public basePrice: number;
    public taxRate!: number
    public discountRate!: number;
    public productType!: ProductType;

    constructor(title: string, imageUrl: string, basePrice: number){
        this.title = title;
        this.imageUrl = imageUrl;
        this.basePrice = basePrice;
    }

    public getPrice(): number {
    return (this.basePrice * (1 - this.discountRate)) * this.taxRate;
    }

    public getPriceWithoutTax(): number {
        return this.basePrice;
    }
}   