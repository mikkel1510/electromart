import { PlayStation } from "./models/PlayStation";
import { ProductType } from "./models/ProductType";

export const config = {
    taxRate: {
        default: 1.25,
        laptop: 1,
        phone: 1,
        ssd: 1,
        playstation: 1
    },
    discountRates: {
        default: 0,
        laptop: 0,
        phone: 0.50,
        ssd: 0,
        playstation: 0
    }
}