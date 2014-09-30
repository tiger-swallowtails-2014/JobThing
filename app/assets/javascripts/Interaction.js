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
    },
    bindDragEvent: function() {
      var items = $('.item');
      items.draggable({
        helper: 'clone',
        start: function() {
          Utility.elementCloner.setClone($(this));
        }
      })
    },
    bindDropEvent: function() {
      Applied.bindDropEvent();
      Interest.bindDropEvent();
      Interview.bindDropEvent();
      Misc.bindDropEvent();
      Outcome.bindDropEvent();
      Trashcan.bindDropEvent();
    }
  }
})();

