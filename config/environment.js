/* jshint node: true */
var flickrAPI = require('./flickrAPI');

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'flickr-map-ember',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      flickr : flickrAPI,
      locations : {
        madrid : {
          lat : '40.416721',
          lng : '-3.703207'
        },
        barcelona : {
          lat : '41.388022',
          lng : '2.170010'
        },
        paris : {
          lat : '48.856442',
          lng : '2.347454'
        },
        london : {
          lat : '51.507551',
          lng : '-0.127709'
        }
      }
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
