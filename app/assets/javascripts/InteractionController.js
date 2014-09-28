var InteractionController = (function() {
  return {
    bindDragEvent: function() {
      var items = $('.item')
      console.log(items);
      items.draggable({
        helper: 'clone',
        start: function() {
          console.log('dragging');
        }
      })
    }
  }
})();
