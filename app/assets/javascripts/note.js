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
      $('.note-edit').on("click", function(e) {
        console.log("bind edit")
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
      console.log("binding")
      $('.note-delete-button').on("click", function(e) {
        e.preventDefault();
        console.log("binding")
        console.log($('.note-delete-button'))
        debugger
        Utility.elementCloner.setClone($(this).parent());

        debugger
        var request = $.ajax({url: $(this).attr('href'), type: "DELETE"});
        debugger
        request.done(function() {
          console.log("success");
          debugger
          Utility.elementCloner.getOriginal().remove();
          debugger
        })
      })
    },
    bindNewSubmitButton: function() {
      $('.note-form').on("submit", function(e) {
        e.preventDefault();
        var request = $.ajax({url: $(this).attr('action'), type: "POST", data: $(this).serialize()});
        request.done(function(data) {
          $('.note-box').append(data);
          Note.bindEditNoteButton();
          Note.bindDeleteButton();
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
          Note.bindEditNoteButton();
          Note.bindDeleteButton();
          LightBox.closeForm();
        })

      })
    },
    removeForm: function() {
      $('.note-form').remove();
    }
  }
})();


