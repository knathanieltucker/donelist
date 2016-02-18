const authenticatedRoutes = FlowRouter.group({
  name: 'authenticated',
  triggersEnter: [ () => {
    if (!Meteor.loggingIn() && !Meteor.userId()) {
      let route = FlowRouter.current();
      if (route.route.name !== 'login') {
        Session.set('redirectAfterLogin', route.path);
      }
      FlowRouter.go('login');
    }
  }]
});

authenticatedRoutes.route( '/', {
  name: 'index',
  action() {
    BlazeLayout.render( 'default', { yield: 'index' } );
  }
});

authenticatedRoutes.route( '/dashboard', {
  name: 'dashboard',
  action() {
    BlazeLayout.render( 'default', { yield: 'dashboard' } );
  }
});

authenticatedRoutes.route( '/insertDeed', {
  name: 'insertDeed',
  action() {
    BlazeLayout.render( 'default', { yield: 'insertDeed' } );
  }
});
