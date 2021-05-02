enum stepTypes {
  product = "products",
  addon = "addons",
  pickup = "pickup",
  checkout = "checkout",
}

interface stepItem {
  icon: string;
  type: stepTypes;
  order: number;
  title: string;
  active: boolean;
  sub_title: string;
  icon_title: string;
}

export interface stores {
  store_id: number;
  name: string;
  title: string;
  description: string;
  email: string;
  slug: string;
  phone: number;
  website?: string;
  logo?: string;
  logo_media?: string;
  background_image_media?: string;
  stripe_user_id: string;
  steps: Array<stepItem>;
  coupons_enabled: boolean;
  subscription_fee?: number;
  tax?: number;
  tax_enabled: boolean;
  setup_fee: {
    fee: number;
    name: string;
    type: string;
    is_active: boolean;
    stripe_product_id: string;
  };
}
