const config = {
  production: {
    SECRET: process.env.SECRET,
    DATABASE:
      process.env.MONGODB_URI
  },
  default: {
    SECRET: "HEY123USER",
    DATABASE:
      "mongodb+srv://cbadmin:cbadmin123@cluster0.knpjn.mongodb.net/website?retryWrites=true&w=majority"
  }
};

exports.get = function get(env) {
  return config[env] || config.default;
};
