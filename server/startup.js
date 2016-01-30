Meteor.startup( () => {
  Modules.server.setEnvironmentVariables();

  //Modules.server.setBrowserPolicies();

  Modules.server.generateAccounts();

});
