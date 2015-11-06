ApplicationController = RouteController.extend({
  onBeforeAction: function () {
    if (! Meteor.userId()) {
      if (Meteor.loggingIn()) {
      }
      else{
        Router.go('login');
      }
    }

    this.next();
  }
});
