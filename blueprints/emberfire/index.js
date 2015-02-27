'use strict';

module.exports = {
  normalizeEntityName: function() {
    // this prevents an error when the entityName is
    // not specified (since that doesn't actually matter
    // to us
  },

  availableOptions: [
    { name: 'url', type: String }
  ],

  locals: function(options) {
    return {
      modulePrefix: options.project.pkg.name,
      firebaseUrl: options.url || 'https://YOUR-FIREBASE-NAME.firebaseio.com/'
    };
  },

  afterInstall: function() {
    return this.addBowerPackagesToProject([
        {name: 'emberfire', target: "~0.0.0"}
    ]);
  }
};
