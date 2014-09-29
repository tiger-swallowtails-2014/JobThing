var Trashcan = (function() {
  return {
    bindDropEvent: function() {
      $('.outcome-table').droppable({
        activate: function() {
          // hightlight
          console.log("active");
        },
        deactivate: function() {
          // toggle highlight
        },
        drop: function() {
          console.log("dropped");
          // render form
          Outcome.bindNewOutcomeButton();
          // Lightbox.renderForm();

        }
      })
    }
})();
