Accounts.onLogin( () => {
  // logout other clients
  Meteor.logoutOtherClients();
  if (Meteor.isClient) {
    Session.set('loggedIn', true);
    let redirect = Session.get('redirectAfterLogin');
    if (redirect && redirect !== '/login') {
      FlowRouter.go(redirect);
    } else {
      FlowRouter.go('index');
    }
  }

});
