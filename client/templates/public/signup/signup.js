import {signup} from "./imports/signup";

Template.signup.onRendered( () => {
  signup({
    form: "#signup",
    template: Template.instance()
  });
});

Template.signup.events({
  'submit form': ( event ) => event.preventDefault()
});
