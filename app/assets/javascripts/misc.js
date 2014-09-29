var Misc = (function() {
  return {
    bindNewMiscButton: function() {
      var element = Utility.elementCloner.getClone();
      console.log(element.find("#new-misc-link").attr('action'))
      var request = $.ajax({
        url: element.find("#new-misc-link").attr('action'),
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
          Misc.bindNewMiscButton();
          // Lightbox.renderForm();

        }
      })
    },
    removeForm: function() {
      $('.new_miscjobthing').remove();
    },
  }
})();
