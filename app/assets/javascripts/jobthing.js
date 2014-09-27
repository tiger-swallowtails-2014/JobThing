var JobThingController = (function() {
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
          $('.jobthing_form_container').append(data);
          $('.jobthing_form_container').toggle();
        })
      });
    },

    removeForm: function() {
      $('.new_jobthing').remove();
    },

    hideForm: function() {
      $('.jobthing_form_container').hide();
    }

  }
})();

