Contact = (function() {
  return {
    bindNewContactButton: function() {
      $('.contact-button').on("click", function(e) {
        e.preventDefault();
        var request = $.ajax({url: $(this).attr('action'), type: "GET"});
        request.done(function(data) {
          Utility.removeAllForms();
          $('.form_container').append(data);
          Contact.bindSubmitButton();
          LightBox.renderForm();
        })
      });

    },
    bindSubmitButton: function() {
      $('.new_contact').on("submit", function(e) {
        e.preventDefault();
        var request = $.ajax({url: $(this).attr('action'), type: "POST", data: $(this).serialize()});
        request.done(function(data) {
          console.log(data);
          $('.contact-box').append(data);
          LightBox.closeForm();

        })

      })
    },
    removeForm: function() {
      $('.new_contact').remove();
    }
  }
})();
