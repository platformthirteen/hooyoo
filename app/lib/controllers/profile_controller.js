ProfileController = RouteController.extend({
  subscriptions: function() {
  },

  waitOn: function () {
  },

  data: function () {
    return {title: "Profile", page: 'profile'};
  },

  onRun: function () {
    this.next();
  },

  onRerun: function () {
    this.next();
  },

  onBeforeAction: function () {
    this.next();
  },

  //**********
  // ACTIONS *
  // *********
  show: function () {
    this.render("Profile");
  },

  edit: function () {
    this.render("editProfile");
  },



  onAfterAction: function () {
  },

  onStop: function () {
  }
});
