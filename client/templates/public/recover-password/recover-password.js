import {recoverPassword} from "./imports/recover-password";

Template.recoverPassword.onRendered( () => {
  recoverPassword({
    form: "#recover-password",
    template: Template.instance()
  });
});

Template.recoverPassword.events({
  'submit form': ( event ) => event.preventDefault()
});
