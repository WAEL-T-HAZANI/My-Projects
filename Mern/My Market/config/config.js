const config = {
  env: process.env.NODE_ENV || "development",
  port: process.env.PORT || 3000,
  jwtSecret: process.env.JWT_SECRET || "",
  mongoUri:
    process.env.MONGODB_URI ||
    process.env.MONGO_HOST ||
    "" + (process.env.MONGO_PORT || "27017") + "/mernproject",
  stripe_connect_test_client_id: "",
  stripe_test_secret_key: "",
  stripe_test_api_key: "",
};

export default config;
