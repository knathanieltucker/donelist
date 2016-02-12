Meteor.methods({
  insertDeed( deed ) {
    check( deed, Object );

    if (!this.userId)
      throw new Meteor.Error("insertDeedFormValidation", "You must be logged in to create a deed");

    if (!Match.test(deed.deed, String) || !deed.deed || deed.deed.length > 200)
      throw new Meteor.Error("insertDeedFormValidation", "You must provide a valid deed");

    return Deeds.insert( {deed: deed.deed} );
  },
  readMethod( argument ) {
    check( argument, String );

    var document = Deeds.findOne( argument );

    if ( !document ) {
      throw new Meteor.Error( 'document-not-found', 'No documents found matching this query.' );
    }

    return document;
  },
  removeMethod( argument ) {
    check( argument, String );

    try {
      Deeds.remove( argument );
    } catch( exception ) {
      return exception;
    }
  },
  updateMethod( argument ) {
    check( argument, Object );

    try {
      var documentId = Deeds.update( argument._id, {
        $set: { 'key': argument.key }
      });
      return documentId;
    } catch( exception ) {
      return exception;
    }
  }
});
