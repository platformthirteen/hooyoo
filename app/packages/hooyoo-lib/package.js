Package.describe({
  name: "hooyoo:lib",
  summary: "HooYoo namespace and dependencies.",
  version: "1.0.0",
});

Package.onUse(function (api) {
  api.versionsFrom('0.9.0');

  api.use('ecmascript');

  var packages = [
    'aldeed:autoform@5.6.1',
    'aldeed:collection2@2.5.0',
    'aldeed:simple-schema@1.3.3',
    'iron:router@1.0.12',
    'zimme:active-route@2.3.2',
    'fourseven:scss@3.3.3_3',
    'twbs:bootstrap@3.3.5',
    'accounts-facebook@1.0.6',
    'useraccounts:bootstrap@1.12.4'
  ];

  api.use(packages);
  api.imply(packages);

  api.addFiles('lib/hooyoo-lib.js', ['client', 'server']);

  api.export('HooYoo');
});

Package.onTest(function (api) {
  api.use('hooyoo:lib');
  api.use('ecmascript');
  api.use('tinytest@1.0.0');
  api.addFiles('test/hooyoo:lib.js', 'server');
});
