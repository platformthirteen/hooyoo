Router.configure({
  layoutTemplate: 'MasterLayout',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound'
});


Router.route('/', {
  name: 'home',
  controller: 'HomeController',
  where: 'client'
});

Router.route('/profile', {
  name: 'profile',
  controller: 'ProfileController',
  where: 'client',
  action: 'show'
});

Router.route('/profile/edit', {
  name: 'profile.edit',
  controller: 'ProfileController',
  where: 'client',
  action: 'edit'
});
