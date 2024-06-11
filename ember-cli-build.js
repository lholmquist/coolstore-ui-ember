'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function (defaults) {
  const app = new EmberApp(defaults, {
    // Add options here
    postcssOptions: {
      compile: {
        plugins: [
          // require('tailwindcss'),
          require('tailwindcss')('./tailwind.config.js'), // If you have a Tailwind config file.
        ],
      },
    },
  });

  return app.toTree();
};
