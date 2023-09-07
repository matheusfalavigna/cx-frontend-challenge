export interface Product {
  id: string;
  title: string;
  price: {
    currency: string;
    amount: number;
    decimals: number;
  };
  installments: {
    quantity: number;
    amount: number;
  };
  address: {
    state_name: string;
    city_name: string;
  };
  picture: string;
  condition: string;
  free_shipping: boolean;
}

export interface Filters {
  id: string;
  name: string;
  results: number;
}
