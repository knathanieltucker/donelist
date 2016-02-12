Groups = new Meteor.Collection('groups');

let GroupsSchema = new SimpleSchema({
  "creatorId": {
    type: String,
    label: "The ID of the creator of this group",
    optional: true,
    denyUpdate: true,
    autoValue: function () {
      if (this.isInsert)
        return Meteor.userId();
    }
  },
  "name": {
    type: String,
    optional: false,
    label: "Group name"
  },
  "memberIds": {
    type: [String],
    label: "The list of user ids that are members of this group",
    optional: true,
    autoValue: function () {
      if (this.isInsert)
        return [];
    }
  },
  "deedIds": {
    type: [String],
    label: "The list of deed ids that are shared with this group",
    optional: true,
    autoValue: function () {
      if (this.isInsert)
        return [];
    }
  }
});

Groups.attachSchema( GroupsSchema );

