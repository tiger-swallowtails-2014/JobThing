var Misc = (function() {
  return {
    bindNewMiscButton: function() {
      var element = Utility.elementCloner.getClone()
      var request = $.ajax({
        url: element.find("#new-misc-link").attr('action'),
        type: "GET"
      });
      request.done(function(data) {
        console.log("success");
        // Utility.removeAllForms();
        $('.form_container').append(data);
        LightBox.renderForm();
        // Interaction.bindDragEvent;
      })
    },
    bindDropEvent: function() {
      $('.misc-table').droppable({
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
          Misc.bindNewInterviewButton();
          // Lightbox.renderForm();

        }
      })
    },
    removeForm: function() {
      $('.new_misc').remove();
    },
  }
})();
