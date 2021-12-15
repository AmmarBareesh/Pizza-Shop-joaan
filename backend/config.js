export default {
  PORT: process.env.PORT || 5550,
  MONGODB_URL:
    process.env.MONGODB_URL ||
    "",
  JWT_SECRET: process.env.JWT_SECRET || "somethingsecret",
};
