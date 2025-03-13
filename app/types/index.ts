export interface Property {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  thumbnail: string;
  images: string[];
}

export interface PropertyResponse {
  products: Property[];
  total: number;
  skip: number;
  limit: number;
}