/*****************************************************************************/
/* Menu: Event Handlers */
/*****************************************************************************/
Template.Menu.events({
  'click [data-routes]': function (event, template) {
    var path = $(event.target).data("routes");
    Router.go(path);
  }
});

/*****************************************************************************/
/* Menu: Helpers */
/*****************************************************************************/
Template.Menu.helpers({
  isHomePath: function () {
    return Iron.Location.get().path == Router.path("home");
  }
});

/*****************************************************************************/
/* Menu: Lifecycle Hooks */
/*****************************************************************************/
Template.Menu.onCreated(function () {
});

Template.Menu.onRendered(function () {
  $(".button-collapse").sideNav({
    closeOnClick: true
  });
});

Template.Menu.onDestroyed(function () {
});
