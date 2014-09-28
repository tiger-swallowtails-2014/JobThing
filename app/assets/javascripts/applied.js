var AppliedController = (function() {
  return {
    bindDropEvent: function() {
      $('.applied-table').droppable({
        activate: function() {
          // hightlight
        },
        listView: function() {
          // toggle highlight
        },
        drop: function() {
          $('.applied-table').append();
          // ajax?
        }
      })
    }
  }
})();
