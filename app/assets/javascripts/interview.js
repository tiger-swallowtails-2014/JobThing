var Interview = (function() {
  return {
    bindNewInterviewButton: function() {
      var request = $.ajax({
        url: $("#new-interview-link").attr('action'),
        type: "GET"
      });
      request.done(function(data) {
        console.log("success");
        Utility.removeAllForms();
        $('.form_container').append(data);
        LightBox.renderForm();
        // Interaction.bindDragEvent;
      })
    },
    bindDropEvent: function() {
      $('.interview-table').droppable({
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
          Interview.bindNewInterviewButton();
          // Lightbox.renderForm();
          // updateInterviewView();
        }
      })
    }
  }
})();

function createInterview(element) {
  var request = $.ajax({
    url: element.find('#create-interview-link').attr('action'),
    type: "POST"
  });
}

function view_removeInterview() {
  Utility.elementCloner.getOriginal().remove();
};

function updateInterviewView() {
  var element = Utility.elementCloner.getClone();
  $('.interview-table tbody').append(element);
  createInterview(element);
  view_removeInterview();
  // re-bind drag events to items
  Interaction.bindDragEvent();
  // look into sorting items
}
