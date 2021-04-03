const env = require("../config/env");
const fetch = require("node-fetch");

class Macify {
  constructor() {}

  /**
   * Look up a mac address for vendor.
   *
   * @param {string} mac The target mac address to look up!
   * @returns
   */
  static async check(mac) {
    const response = await (
      await fetch(env.vendors.url.replace("{mac}", mac))
    ).text();

    if (response.match(/not found/i)) {
      return {
        status: !1,
        message: response || "Something went wrong!",
      };
    }

    return {
      status: !0,
      message: "Mac Vendor Found!",
      vendor: response,
    };
  }
}

module.exports = Macify;
