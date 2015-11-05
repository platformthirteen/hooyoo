/*****************************************************************************/
/* Profile: Event Handlers */
/*****************************************************************************/
Template.Profile.events({
});

/*****************************************************************************/
/* Profile: Helpers */
/*****************************************************************************/
Template.Profile.helpers({
});

/*****************************************************************************/
/* Profile: Lifecycle Hooks */
/*****************************************************************************/
Template.Profile.onCreated(function () {
});

Template.Profile.onRendered(function () {
  var placeholders = document.querySelectorAll('.defer-image');

  for (var i = 0, len = placeholders.length; i < len; i++) {
      deferImage(placeholders[i]);
  }
});

Template.Profile.onDestroyed(function () {
});
