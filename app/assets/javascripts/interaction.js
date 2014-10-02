Interaction = (function() {
  return {
    bindFormButton: function() {
      Note.bindNewNoteButton();
      Note.bindEditNoteButton();
      Note.bindDeleteButton();
      Contact.bindNewContactButton();
      Contact.bindEditContactButton();
      Contact.bindDeleteButton();
    }
  }
})();
