Meteor.publish( 'deeds', function() {
  return Deeds.find();
});
