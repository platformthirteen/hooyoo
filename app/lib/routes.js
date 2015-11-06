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


Router.route('/login', {
  name: 'login',
  layoutTemplate: 'BlankLayout',
  controller: 'LoginController',
  where: 'client'
});

Router.route('/logout', {
  name: 'logout',
  layoutTemplate: 'BlankLayout',
  controller: 'LoginController',
  action: 'logout'
});
