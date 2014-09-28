var AppliedController = (function() {
  return {
    bindDropEvent: function() {
      $('.applied-table').droppable({
        activate: function() {
          // hightlight
          console.log("active")
        },
        listView: function() {
          // toggle highlight
        },
        drop: function() {
          console.log("dropped")
          var e = Utility.elementCloner.getClone()
          $('.applied-table tbody').append(e);
          // ajax?
          createApplied(e);
        }
      })
    }
  }
})();

function createApplied(element) {
  var request = $.ajax({
    url: element.find('#store-link').attr('action'),
    type: "POST"
  })
  request.done(function() {
    console.log("success")
  })
}
