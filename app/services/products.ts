import { Product } from "@/hook/ProductContext";

export const searchProducts = async (searchText: string) => {
  try {
    const response = await fetch(
      `https://api.mercadolibre.com/sites/MLA/search?q=${searchText}&limit=10`
    );
    const data = await response.json();
    const products = data.results.map((product: any) => {
      return {
        id: product.id,
        title: product.title,
        price: {
          currency: product.currency_id,
          amount: product.price,
          decimals: 0,
        },
        installments: {
          quantity: product.installments.quantity,
          amount: product.installments.amount,
        },
        address: {
          state_name: product.address.state_name,
          city_name: product.address.city_name,
        },
        picture: product.thumbnail,
        condition: product.condition,
        free_shipping: product.shipping.free_shipping,
      } as Product;
    });
    return products;
  } catch (error) {
    console.error("Error fetching products:", error);
  }
};
