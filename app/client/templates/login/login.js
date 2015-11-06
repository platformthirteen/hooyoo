/*****************************************************************************/
/* Login: Event Handlers */
/*****************************************************************************/
Template.Login.events({
  'click #login': function () {
    Meteor.loginWithFacebook({
      requestPermissions: ['user_birthday', 'user_photos', 'email']
    }, function (err) {
      if (err) {
        Session.set('errorMessage', err.reason || 'Unknown error');
      }
    });
  }
});

/*****************************************************************************/
/* Login: Helpers */
/*****************************************************************************/
Template.Login.helpers({
});

/*****************************************************************************/
/* Login: Lifecycle Hooks */
/*****************************************************************************/
Template.Login.onCreated(function () {
});

Template.Login.onRendered(function () {
});

Template.Login.onDestroyed(function () {
});
