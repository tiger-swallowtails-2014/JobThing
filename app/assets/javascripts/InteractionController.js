var InteractionController = (function() {
  return {
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
      AppliedController.bindDropEvent();
      InterestController.bindDropEvent();
    }
  }
})();
