interface userShippingAddress {
  city: string;
  state: string;
  country: string;
  zip: number;
  address: string;
}

export interface users {
  user_id: number;
  first_name: string;
  last_name: string;
  phone?: number;
  email: string;
  shipping_address?: userShippingAddress;
  active: boolean;
  store_id?: number;
}
