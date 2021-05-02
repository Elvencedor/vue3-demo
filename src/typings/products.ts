enum productTypes {
  product = "product",
  addon = "addon",
}

enum subscriptionPricesInterval {
  weekly = "week",
  bi_weekly = "bi-week",
  monthly = "month",
  unlimited = "unlimited",
  custom = "custom",
}

enum paymentFrequency {
  monthly = "month",
  annual = "year",
}

interface priceItem {
  interval: paymentFrequency;
  price: number;
}

interface subscriptionPrice {
  price: Array<priceItem>;
  interval: subscriptionPricesInterval;
}

export interface productItem {
  product_id: number;
  name: string;
  title: string;
  description: string;
  store_id: number;
  stripe_product_id: string;
  product_type: productTypes;
  available_addons: Array<number>;
  one_time_price?: { price: number };
  subscription_prices?: subscriptionPrice;
  tax_enabled: boolean;
  is_active: boolean;
  ui_order: number;
}
