NewJobthing = {

    bindNewJobthingButton: function() {
      $("#show_new_jobthing_form").on("click", function(e) {
        e.preventDefault();
        var request = $.ajax({url: $(this).attr("action"), type: "GET"});
        request.done(function(data) {
          console.log("success");
          Utility.removeAllForms();
          $('.form_container').append(data);
          LightBox.renderForm();
          // Interaction.bindDragEvent();
        })
      });
    },

    removeForm: function() {
      $('.new_jobthing').remove();
    },

    hideForm: function() {
      $('.form_container').hide();
    }

};


