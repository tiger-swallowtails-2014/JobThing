var Applied = (function() {
  return {
    bindDropEvent: function() {
      $('.applied-table').droppable({
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
          $('.applied-table tbody').append(element);
          createApplied(element);
          view_removeInterest();
          // re-bind drag events to items
          Interaction.bindDragEvent();
          // look into sorting items
        }
      })
    }
  }
})();

function createApplied(element) {
  var request = $.ajax({
    url: element.find('#create-applied-link').attr('action'),
    type: "POST"
  });
}

function view_removeInterest() {
  Utility.elementCloner.getOriginal().remove();
};

