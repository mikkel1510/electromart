import { ProductType } from "./models/ProductType";

export const config = {
    taxRate: {
        [ProductType.PlayStation]: 1.15,
        [ProductType.Laptop]: 1.15,
        [ProductType.SSD]: 1.15,
        [ProductType.Phone]: 1.15
        
    }, discountRate: {
        [ProductType.PlayStation]: 0.10,
        [ProductType.Laptop]: 0.25,
        [ProductType.SSD]: 0.15,
        [ProductType.Phone]: 0.30
    }
}