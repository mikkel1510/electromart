import { ProductType } from "./ProductType";

export interface ProductDTO {
  title: string;
  imageUrl: string;
  basePrice: number;
  productType: ProductType;

  price: number;
  priceWithoutTaxes: number;
}