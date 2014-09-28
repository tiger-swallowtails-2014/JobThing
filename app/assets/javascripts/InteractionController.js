var InteractionController = (function() {
  return {
    bindDragEvent: function() {
      var items = $('.item');
      items.draggable({
        helper: 'clone',
        start: function() {
          console.log('dragging');
        }
      })
    },
    bindDropEvent: function() {
      AppliedController.bindDropEvent();
    }
  }
})();
