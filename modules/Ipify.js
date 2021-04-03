const env = require("../config/env");
const fetch = require("node-fetch");

class Ipify {
  constructor() {}

  /**
   * Check my own ip address info.
   *
   * @returns
   */
  static async self() {
    const response = await (await fetch(env.ipify.url, {})).json();
    if (response.ip) {
      return await Ipify.info(response.ip);
    }

    return {
      status: !1,
      message: "Something went wrong!",
    };
  }

  /**
   * Look up an ip address on ipstack.
   *
   * @param {string} ip the target ip address to look up!
   * @returns
   */
  static async info(ip) {
    const response = await (
      await fetch(
        env.ipstack.url.replace("{key}", env.ipstack.key).replace("{ip}", ip)
      )
    ).json();

    if (response) {
      return {
        status: !0,
        message: "Info Found Successfully!",
        info: {
          ip: response.ip,
          country_name: response.country_name,
          region_name: response.region_name,
          city: response.city,
        },
      };
    }

    return {
      status: !1,
      message: "Something went wrong!",
    };
  }
}

module.exports = Ipify;
