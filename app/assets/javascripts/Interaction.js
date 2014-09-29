var Interaction = (function() {
  return {
    bindFormButton: function() {
      Jobthing.bindNewJobthingButton();
      // Interview.bindNewInterviewButton();
      // misc
      // outcome
    },
    bindDragEvent: function() {
      var items = $('.item');
      items.draggable({
        helper: 'clone',
        start: function() {
          console.log('dragging');
          console.log($(this));
          Utility.elementCloner.setClone($(this));
        }
      })
    },
    bindDropEvent: function() {
      Applied.bindDropEvent();
      Interest.bindDropEvent();
      Interview.bindDropEvent();
      Misc.bindDropEvent();
      // outcome
    }
  }
})();
