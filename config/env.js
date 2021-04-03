const env = {
  ipify: {
    url: "https://api.ipify.org/?format=json",
  },
  ipstack: {
    key: "a7b7a792adfc2bb96bb639263eadf0d5",
    url: "http://api.ipstack.com/{ip}?access_key={key}&format=1",
  },
  vendors: {
    url: "https://api.macvendors.com/{mac}",
  },
  options: [
    {
      name: "self",
      type: Boolean,
      required: true,
    },
    {
      name: "ip",
      type: String,
      required: true,
    },
    {
      name: "mac",
      type: String,
      required: true,
    },
  ],
};

module.exports = env;
