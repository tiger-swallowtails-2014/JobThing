Contact = (function() {
  return {
    bindNewContactButton: function() {
      $('.contact-button').on("click", function(e) {
        e.preventDefault();
        var request = $.ajax({url: $(this).attr('action'), type: "GET"});
        request.done(function(data) {
          Utility.removeAllForms();
          $('.form_container').append(data);
          Contact.bindNewSubmitButton();
          LightBox.renderForm();
        })
      });

    },
    bindEditContactButton: function() {
      $('.contact-edit').on("click", function(e) {
        Utility.elementCloner.setClone($(this).parent());
        e.preventDefault();
        var request = $.ajax({url: $(this).attr('href'), type: "GET"});
        request.done(function(data) {
          Utility.removeAllForms();
          $('.form_container').append(data);
          Contact.bindEditSubmitButton();
          LightBox.renderForm();
        })
      })
    },
    bindDeleteButton: function() {
      $('.contact-delete-button').on("click", function(e) {
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
      $('.contact-form').on("submit", function(e) {
        e.preventDefault();
        var request = $.ajax({url: $(this).attr('action'), type: "POST", data: $(this).serialize()});
        request.done(function(data) {
          $('.contact-box').append(data);
          Contact.bindEditContactButton();
          Contact.bindDeleteButton();
          LightBox.closeForm();
        })
      })
    },
    bindEditSubmitButton: function() {
      $('.contact-form').on("submit", function(e) {
        var element = $(this)
        e.preventDefault();
        var request = $.ajax({url: $(this).attr('action'), type: "PUT", data: $(this).serialize()});
        request.done(function(data) {
          Utility.elementCloner.getOriginal().remove();
          $('.contact-box').append(data);
          Contact.bindEditContactButton();
          Contact.bindDeleteButton();
          LightBox.closeForm();
        })

      })
    },
    removeForm: function() {
      $('.contact-form').remove();
    }
  }
})();
