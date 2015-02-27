var inflection = require('inflection');

module.exports = {
  description: 'Generates a firebase adapter.',

  locals: function(options) {
    var firebaseUrl     = 'config.firebase';
    var adapterName     = options.entity.name;

    if (adapterName !== 'application') {
      firebaseUrl = "config.firebase + '/" + inflection.pluralize(adapterName) + "'";
    }

    return {
      firebaseUrl: firebaseUrl
    };
  }
};
