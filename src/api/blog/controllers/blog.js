"use strict";

/**
 * blog controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::blog.blog", {
  async find(ctx) {
    // ctx.state is availeble if request using jtw token
    const user = ctx?.state?.user;
    if (user) {
      ctx.query.filter = {
        ...(ctx.query.filters || {}),
        owrner: user.id,
      };
    }

    return await super.find(ctx);
  },
  // TODO: update using
});
