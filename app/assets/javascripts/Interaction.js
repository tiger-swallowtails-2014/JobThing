Interaction = (function() {
  return {
    bindFormButton: function() {
      Jobthing.bindNewJobthingButton();
      console.log($('.note-button'))
      Note.bindNewNoteButton();
      Note.bindEditNoteButton();
      Contact.bindNewContactButton();
      Contact.bindEditContactButton();
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

