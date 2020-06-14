const config = {
  production: {
    SECRET: process.env.SECRET,
    DATABASE:
      process.env.MONGODB_URI
  },
  default: {
    SECRET: "HEY123USER",
    DATABASE:
      "mongodb+srv://nsstezu:Nss@tezu12345@cluster0-lwnmk.gcp.mongodb.net/nss?retryWrites=true&w=majority"
  }
};

exports.get = function get(env) {
  return config[env] || config.default;
};
