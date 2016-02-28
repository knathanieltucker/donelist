Template.deedEditor.onCreated(()=> {
  Template.instance().deedMarkdown = new ReactiveVar();
  Template.instance().deedMarkdown.set("");
});

Template.deedEditor.onRendered( () => {

  Template.instance().editor = CodeMirror.fromTextArea(
    Template.instance().find("#deedEditor"), {
      lineNumbers: false,
      fixedGutter: false,
      mode: "markdown",
      lineWrapping: true,
      cursorHeight: 0.85
    });
});

Template.deedEditor.events({
  'keyup .CodeMirror': ( event, template ) => {
    let markdown = template.editor.getValue();

    Template.instance().deedMarkdown.set(markdown);
  }
});

Template.deedEditor.helpers({
  deedMarkdown() {
    return " \n" + Template.instance().deedMarkdown.get();
  }
});
