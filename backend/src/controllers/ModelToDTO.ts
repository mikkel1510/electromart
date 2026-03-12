import { Product } from "../models/Product";
import { ProductDTO } from "../../../shared/dto/ProductDTO";

export function toProductDTO(product: Product): ProductDTO {
  return {
    title: product.title,
    imageUrl: product.imageUrl,
    basePrice: product.basePrice,
    productType: product.productType,
    price: product.getPrice(),
    priceWithoutTaxes: product.getPriceWithoutTaxes()
  };
}