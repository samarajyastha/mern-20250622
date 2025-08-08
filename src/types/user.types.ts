export interface Address {
  city: string;
  country: string;
  province: string;
  street: string | null;
}

export interface User {
  _id?: string;
  address: Address;
  createdAt: Date;
  email: string;
  name: string;
  password: string;
  phone: string;
  profileImageUrl: string | null;
  roles: string[];
}
