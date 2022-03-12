export interface ProductsInterface {
  _id: string;
  SKU: string;
  code?: number | null;
  name: string;
  description?: null | string;
  pictures: Array<{ [key: string]: string } | string>;
  price: number;
  currency: string;
  __v?: number;
  sku?: string;
  createdAt?: Date;
  updatedAt?: Date;
}
