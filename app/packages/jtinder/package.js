Package.describe({
  name: 'daltonrenaldo:jtinder',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.0.2');
  api.use(['ecmascript',
    'jquery',
  ]);

  var assets = [
    "img/dislike_button.png",
    "img/like_button.png",
    "img/liked.png",
    "img/nope.png"
  ];

  api.addAssets(assets, 'client');
  
  api.addFiles('css/jTinder.css', 'client');
  api.addFiles('javascript/jquery.transform2d.js', 'client');
  api.addFiles('javascript/jquery.jTinder.js', 'client');

});
