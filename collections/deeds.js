Deeds = new Meteor.Collection( 'deeds' );

Deeds.allow({
  insert: () => false,
  update: () => false,
  remove: () => false
});

Deeds.deny({
  insert: () => true,
  update: () => true,
  remove: () => true
});

let DeedsSchema = new SimpleSchema({
  "creatorId": {
    type: String,
    label: "The ID of the creator of this deed",
    optional: true,
    denyUpdate: true,
    autoValue: function () {
      if (this.isInsert)
        return Meteor.userId();
    }
  },
  "deed": {
    type: String,
    optional: false,
    label: "What you have done"
  },
  "shared.users": {
    type: [String],
    label: "The list of user ids can view this deed",
    optional: true,
    autoValue: function () {
      if (this.isInsert)
        return [];
    }
  },
  "shared.groups": {
    type: [String],
    label: "The list of group ids can view this deed",
    optional: true,
    autoValue: function () {
      if (this.isInsert)
        return [];
    }
  }
});

Deeds.attachSchema( DeedsSchema );
