var JobthingController = (function() {
  return {
    bindButton: function() {
      $("#show_new_jobthing_form").on("click", function(e) {
        console.log("clicked");
        // e.preventDefault();
        console.log($(this))
        var request = $.ajax({url: $(this).attr("action"), type: "GET"});
        request.done(function(data) {
          console.log("success");
          console.log(data);
          Utility.removeAllForms();
          $('.form_container').append(data);
          LightBox.renderForm();
        })
      });
    },

    removeForm: function() {
      $('.new_jobthing').remove();
    },

    hideForm: function() {
      $('.form_container').hide();
    }

  }
})();


