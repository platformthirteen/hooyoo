Package.describe({
  name: 'daltonrenaldo:responsive-image-placeholders',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/i-like-robots/Responsive-Image-Placeholders',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.markdown'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.0.2');

  api.export('deferImage');

  api.addFiles('css/responsive-placeholder-images.css', 'client');
  api.addFiles('js/responsive-placeholder-images.js', 'client');

});
