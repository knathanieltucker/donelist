import {setEnvironmentVariables} from "./imports/set-environment-variables";
import {generateAccounts} from "./imports/generate-accounts";

Meteor.startup( () => {
  setEnvironmentVariables();

  //setBrowserPolicies();

  generateAccounts();

});
