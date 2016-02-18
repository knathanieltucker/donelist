Meteor.startup( () => {
  Tracker.autorun( () => {
   if (!Meteor.userId())
     if (Session.get('loggedIn')){
      const route = FlowRouter.current();
      Session.set('redirectAfterLogin', route.path);

      FlowRouter.go(FlowRouter.path('login'));
    }
   });
} );
