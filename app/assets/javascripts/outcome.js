Outcome = (function() {
  return {
    bindNewOutcomeButton: function() {
      var element = Utility.elementCloner.getClone()
      var request = $.ajax({
        url: element.find("#new-outcome-link").attr('action'),
        type: "GET"
      });
      request.done(function(data) {
        console.log("success");
        Utility.removeAllForms();
        $('.form_container').append(data);
        LightBox.renderForm();
        Interaction.bindDragEvent;
        JobPage.bindEvents();
      })
    },
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
    },
    removeForm: function() {
      $('.big-buttons').remove();
    },
  }
})();
