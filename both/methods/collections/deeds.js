Meteor.methods({
  insertMethod( argument ) {
    check( argument, Object );

    try {
      var documentId = Deeds.insert( argument );
      return documentId;
    } catch( exception ) {
      return exception;
    }
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
