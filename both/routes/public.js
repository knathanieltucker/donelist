const publicRoutes = FlowRouter.group({
  name: 'public',
  triggersEnter: [ () => {
    if (Meteor.loggingIn() || Meteor.userId()) {
      FlowRouter.go('index');
    }
  }]
});

publicRoutes.route( '/signup', {
  name: 'signup',
  action() {
    BlazeLayout.render( 'default', { yield: 'signup' } );
  }
});

publicRoutes.route( '/login', {
  name: 'login',
  action() {
    BlazeLayout.render( 'default', { yield: 'login' } );
  }
});

publicRoutes.route( '/recover-password', {
  name: 'recover-password',
  action() {
    BlazeLayout.render( 'default', { yield: 'recoverPassword' } );
  }
});

publicRoutes.route( '/reset-password/:token', {
  name: 'reset-password',
  action() {
    BlazeLayout.render( 'default', { yield: 'resetPassword' } );
  }
});

publicRoutes.route( '/sidebar', {
  name: 'sidebar',
  action() {
    BlazeLayout.render( 'sidebar' );
  }
});
