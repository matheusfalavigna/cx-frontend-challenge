import { Product } from "@/hook/ProductContext";

export const searchProducts = async (
  searchText: string,
  sortOption: string,
  priceFilter: string = ""
): Promise<Product[]> => {
  try {
    const data = await getData(searchText, sortOption, priceFilter);

    const products = data.results.map((product: any) => {
      const installments = product.installments || { quantity: 0, amount: 0 };

      return {
        id: product.id,
        title: product.title,
        price: {
          currency: product.currency_id,
          amount: product.price,
          decimals: 0,
        },
        installments: {
          quantity: installments.quantity,
          amount: installments.amount,
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
    throw error;
  }
};

const getData = async (
  searchText: string,
  sortOption: string,
  priceFilter: string
) => {
  try {
    const response = await fetch(
      `https://api.mercadolibre.com/sites/MLA/search?q=${searchText}&sort=${sortOption}&limit=10&price=${priceFilter}`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const getAvailableFilters = async (searchText: string) => {
  try {
    const response = await fetch(
      `https://api.mercadolibre.com/sites/MLA/search?q=${searchText}&limit=10`
    );
    const data = await response.json();

    return extractPriceFilterValues(data.available_filters);
  } catch (error) {
    console.error("Error fetching available filters:", error);
    throw error;
  }
};

const extractPriceFilterValues = (availableFilters: any) => {
  const priceFilter = availableFilters.find(
    (filter: any) => filter.id === "price"
  );

  if (priceFilter) {
    const priceFilterValues = priceFilter.values.map((value: any) => {
      return {
        id: value.id,
        name: value.name,
        results: value.results,
      };
    });
    return priceFilterValues;
  }
  return [];
};
