const env = require("./config/env");
const commandLineArgs = require("command-line-args");
const Ipify = require("./modules/Ipify");
const Macify = require("./modules/Macify");

/**
 * Handle user input.
 */
const args = commandLineArgs(env.options);

(async () => {
  /**
   * handle required args.
   */
  if (args.self || args.ip || args.mac) {
    /**
     * Check your own ip address info.
     */
    if (args.self) {
      const res = await Ipify.self();
      console.log(res);
    }

    /**
     * check another ip address info.
     */
    if (args.ip) {
      const res = await Ipify.info(args.ip);
      console.log(res);
    }

    /**
     * check mac address vendor.
     */
    if (args.mac) {
      const res = await Macify.check(args.mac);
      console.log(res);
    }

    return;
  }
})();
