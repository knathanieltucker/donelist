Template.header.helpers({
  brandLink() {
    let login = FlowRouter.path( 'login' ),
        index = FlowRouter.path( 'index' );
    return !Meteor.loggingIn() && !Meteor.userId() ? login : index;
  }
});

Template.header.events({
  'click .logout' () {
    Meteor.logout( ( error ) => {
      if ( error ) {
        Bert.alert( error.reason, 'warning' );
      } else {
        Bert.alert( 'Logged out!', 'success' );
        Session.set('loggedIn', false);
      }
    });
  },
  'click #menu-toggle': (e) => {
    e.preventDefault();
    let degrees = 180;
    $('#logo').toggleClass('down');
    $('#wrapper').toggleClass('toggled');
  }
});
