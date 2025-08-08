export interface Product {
  _id?: string;
  brand: string | null;
  category: string;
  createdAt: Date;
  createdBy: string;
  description: string | null;
  imageUrls: string[] | [];
  name: string;
  price: number;
  stock: number;
}

export interface ProductQuery {
  brands?: string;
  category?: string;
  createdAt?: Date;
  createdBy?: string;
  limit?: number;
  max?: number;
  min?: number;
  name?: string;
  offset?: number;
  price?: number;
  sort?: string;
}
