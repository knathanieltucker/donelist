Tags = new Meteor.Collection('tags');

let TagsSchema = new SimpleSchema({
  "creatorId": {
    type: String,
    label: "The ID of the creator of this tag",
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
    label: "Tag name"
  },
  "deedIds": {
    type: [String],
    label: "The list of deed ids that are tagged with this tag",
    optional: true,
    autoValue: function () {
      if (this.isInsert)
        return [];
    }
  }
});

Tags.attachSchema( TagsSchema );

