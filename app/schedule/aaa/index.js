'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  return {
    schedule: {
      interval: '30s',
      type: 'worker',
      disable: app.customXxx.aaa.index.xxxDisable,
      immediate: false,
    },

    /**
     * @param {Egg.Context} ctx - egg context
     */
    async task(ctx) {
      ctx.runInBackground(async () => {
        console.log('aaa');
      });
    },
  };
};
