const config = {
  production: {
    SECRET: process.env.SECRET,
    DATABASE:
      //mongodb+srv://adiXcodr:<password>@cluster0-w7d8y.mongodb.net/test?retryWrites=true&w=majority
      //mongodb+srv://nsstezu:Nss@tezu12345@cluster0-lwnmk.gcp.mongodb.net/nss?retryWrites=true&w=majority
      process.env.MONGODB_URI
  },
  default: {
    SECRET: "HEY123USER",
    DATABASE:
      "mongodb://localhost:27017/nss"
  }
};

exports.get = function get(env) {
  return config[env] || config.default;
};
