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
          $('.form_container').append(data);
          LightBox.renderForm();
          // $('.job-form').append(data);
          // $('.form_container').toggle();
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

var LightBox = {
  bindEvents: function () {
    $('.test').on("click", this.renderForm);
  },
  renderForm: function () {
    // debugger
    console.log("rendering form")
    // var $template = $('.lightbox')
    // var form = $template.clone().html().trim()
    $('.main-container').css('opacity', '0.1');
    $('.form_container').toggle();
  }
}
