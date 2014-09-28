var InteractionController = (function() {
  return {
    bindDragEvent: function() {
      var items = $('.item')
      console.log(items);
      items.draggable({
        start: function() {
          console.log('dragging');
        }
      })
    }
  }
})();
