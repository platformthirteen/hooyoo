LoginController = RouteController.extend({
  subscriptions: function() {
  },

  waitOn: function () {
  },

  data: function () {
    return {page: 'login'}
  },

  onRun: function () {
    this.next();
  },

  onRerun: function () {
    this.next();
  },

  onBeforeAction: function () {
    if (Meteor.userId()) {
      Router.go("home");
    }
    this.next();
  },

  action: function () {
    this.render();
  },

  logout: function() {
    Meteor.logout(function() {
      Router.go('login');
    });
  },

  onAfterAction: function () {
  },

  onStop: function () {
  }
});
