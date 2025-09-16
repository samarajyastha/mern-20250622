const config = {
  appName: process.env.NEXT_PUBLIC_APP_NAME || "Shop Nest",
  apiUrl: process.env.NEXT_PUBLIC_API_URL || "",
  stripeKey: process.env.NEXT_PUBLIC_STRIPE_KEY || "",
};

export default config;
