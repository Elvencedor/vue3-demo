enum paymentFrequency {
  monthly = "month",
  annual = "year",
}

enum subscriptionFrequency {
  weekly = "week",
  bi_weekly = "bi-week",
  monthly = "month",
  unlimited = "unlimited",
  custom = "custom",
}

interface productObjType {
  product_id: number;
  quantity: number;
  addons: [
    {
      product_id: number;
    }
  ];
  // modifiers: [
  //   {
  //     product_id: number;
  //   }
  // ];
}

export interface cartItem {
  cart_id: number;
  store_id: number;
  user_id: number;
  schedule_id: number;
  schedule_time_id: number;
  fulfillment_id: number;
  coupon_id: number;
  payment_frequency: paymentFrequency;
  fulfillment_frequency: subscriptionFrequency;
  products: Array<productObjType>;
  is_paid: boolean;
  is_subscription: boolean;
  purchase_id?: number;
  subscription_id?: number;
}
