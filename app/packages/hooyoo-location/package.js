Package.describe({
  name: "hooyoo:location",
  summary: "Location handling for HooYoo.",
  version: "1.0.0"
});

Package.onUse(function (api) {
  api.versionsFrom('0.9.0');

  api.use('tracker');

  var packages = [
    'hooyoo:lib@1.0.0',
    'mdg:geolocation@1.1.0'
  ];

  api.use(packages);
  api.imply(packages);

  api.addFiles('lib/hooyoo-location.js', ['client', 'server']);
  api.addFiles('client/hooyoo-location.js', 'client');
  api.addFiles('server/hooyoo-location.js', 'server');

});

Package.onTest(function (api) {
  api.use('hooyoo:location');
  api.use('ecmascript');
  api.use('tinytest@1.0.0');
  api.addFiles('test/hooyoo:location.js', 'server');
});
