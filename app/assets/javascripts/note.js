Note = (function() {
  return {
    bindNewNoteButton: function() {
      $('.note-button').on("click", function(e) {
        e.preventDefault();
        var request = $.ajax({url: $(this).attr('action'), type: "GET"});
        request.done(function(data) {
          Utility.removeAllForms();
          $('.form_container').append(data);
          Note.bindNewSubmitButton();
          LightBox.renderForm();
        })
      });

    },
    bindEditNoteButton: function() {
      $('.note-box').on("click", '.note-edit', function(e) {
        Utility.elementCloner.setClone($(this).parent());
        e.preventDefault();
        var request = $.ajax({url: $(this).attr('href'), type: "GET"});
        request.done(function(data) {
          Utility.removeAllForms();
          $('.form_container').append(data);
          Note.bindEditSubmitButton();
          LightBox.renderForm();
        })
      })
    },
    bindDeleteButton: function() {
      $('.note-box').on("click", '.note-delete-button', function(e) {
        Utility.elementCloner.setClone($(this).parent());
        e.preventDefault();
        var request = $.ajax({url: $(this).attr('href'), type: "DELETE"});
        request.done(function() {
          console.log("success");
          Utility.elementCloner.getOriginal().remove();
        })
      })
    },
    bindNewSubmitButton: function() {
      $('.note-form').on("submit", function(e) {
        e.preventDefault();
        var request = $.ajax({url: $(this).attr('action'), type: "POST", data: $(this).serialize()});
        request.done(function(data) {
          $('.note-box').append(data);
          LightBox.closeForm();
        })
      })
    },
    bindEditSubmitButton: function() {
      $('.note-form').on("submit", function(e) {
        var element = $(this)
        e.preventDefault();
        var request = $.ajax({url: $(this).attr('action'), type: "PUT", data: $(this).serialize()});
        request.done(function(data) {
          Utility.elementCloner.getOriginal().remove();
          $('.note-box').append(data);
          LightBox.closeForm();
        })

      })
    },
    removeForm: function() {
      $('.note-form').remove();
    }
  }
})();
