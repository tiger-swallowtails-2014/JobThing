Note = (function() {
  return {
    bindNewNoteButton: function() {
      $('.note-button').on("click", function(e) {
        e.preventDefault();
        var request = $.ajax({url: $(this).attr('action'), type: "GET"});
        request.done(function(data) {
          console.log("success");
          console.log(data);
          Utility.removeAllForms();
          $('.form_container').append(data);
          Note.bindSubmitButton();
          LightBox.renderForm();
        })
      });

    },
    bindSubmitButton: function() {
      $('.new_note').on("submit", function(e) {
        e.preventDefault();
        var request = $.ajax({url: $(this).attr('action'), type: "POST", data: $(this).serialize()});
        request.done(function(data) {
          console.log("success");
          $('.note-box').append(data);
        })

      })
    },
    removeForm: function() {
      $('.new_note').remove();
    }
  }
})();
