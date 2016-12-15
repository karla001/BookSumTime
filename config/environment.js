var _ = require('lodash');

var localEnvVars = {
  TITLE:      'BookReview',
  SAFE_TITLE: 'BookReview'
};

// Merge all environmental variables into one object.
module.exports = _.extend(process.env, localEnvVars);
