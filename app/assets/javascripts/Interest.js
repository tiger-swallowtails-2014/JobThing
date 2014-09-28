var Interest = (function() {
  return {
    bindDropEvent: function() {
      $('.interest-table').droppable({
        activate: function() {
          // hightlight
          console.log("active");
        },
        deactivate: function() {
          // toggle highlight
        },
        drop: function() {
          console.log("dropped");
          var element = Utility.elementCloner.getClone();
          $('.interest-table tbody').append(element);
          db_removeApplied(element);
          view_removeApplied(element);
          Interaction.bindDragEvent();
        }
      })
    }
  }
})();

function view_removeApplied() {
  Utility.elementCloner.getOriginal().remove();
};

function db_removeApplied(element) {
  var request = $.ajax({
    url: element.find('#delete-applied-link').attr('action'),
    type: "DELETE"
  });
}
