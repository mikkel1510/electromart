import { config } from "../config";
import { ProductType } from "./ProductType";

export abstract class Product {
    public title: string;
    public imageUrl: string;
    public basePrice: number;
    public taxRate: number = config.taxRate.default
    public discountRate: number = config.discountRates.default;
    public productType!: ProductType;

    constructor(title: string, imageUrl: string, basePrice: number, productType: ProductType){
        this.title = title;
        this.imageUrl = imageUrl;
        this.basePrice = basePrice;
        this.productType = productType
        this.configSetup()
    }

    public configSetup(): void {
    const type = this.productType.toLowerCase() as keyof typeof config.taxRate;
    
    this.discountRate = config.discountRates[type] ?? config.discountRates.default;
    this.taxRate = config.taxRate[type] ?? config.taxRate.default;
}

    public getPrice(): number {
    return (this.basePrice * (1 - this.discountRate)) * this.taxRate;
    }

    public getPriceWithoutTax(): number {
        return this.basePrice;
    }
}   