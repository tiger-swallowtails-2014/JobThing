Interaction = (function() {
  return {
    bindFormButton: function() {
      console.log("binding")

      Note.bindNewNoteButton();
      Note.bindEditNoteButton();
      Note.bindDeleteButton();
      Contact.bindNewContactButton();
      Contact.bindEditContactButton();
      Contact.bindDeleteButton();
    }
  }
})();
