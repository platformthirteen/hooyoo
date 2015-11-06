Meteor.startup(function () {
  // TODO: Move AppId & Secret to settings.json
  ServiceConfiguration.configurations.upsert(
    { service: "facebook" },
    {
      $set: {
        appId: "1074641989226896",
        loginStyle: "popup",
        secret: "f0c8cb6ebcbd664026b58835e4e5fd7f"
      }
    }
  );


});
