Utility = (function() {
  return {
    hideAllForms: function() {
      $('.form_container').hide();
    },
    removeAllForms: function() {
      // Jobthing.removeForm();
      // Interview.removeForm();
      // Misc.removeForm();
      // Outcome.removeForm();
      Note.removeForm();
      Contact.removeForm();
    },
    elementCloner: (function() {
      var clonedItem;
      var original;
      return {
        setClone: function(element) {
          original = element;
          clonedItem = element.clone();
        },
        getClone: function() {
          return clonedItem;
        },
        getOriginal: function() {
          return original;
        }
      }
    })(),
    jsonParser: function(jobthings_data) {
      var jobthings = [];
      for (var i = 0; i < jobthings_data.length; i++) {
        var jobthing = new Jobthing.properties(jobthings_data[i]);
        jobthings.push(jobthing);
      };
      return jobthings;
    },
    sendRequest: function(url, type, params) {
      var request = $.ajax({url: url, type: type, data: params});
      request.done(function() {
        console.log("success");
      })
    }
  }
})();

JobPage = {
  bindEvents: function () {
    $('.job-page-link').on("click", this.renderJobPage);
  },
  renderJobPage: function(event) {
    event.preventDefault();
    $.ajax({
      url: $(this).attr('action'),
      type: "Get"
    })
    .done(function(data){
      $('.main-container').hide(200);
      // remove existing jobpage
      $('.jobpage').remove();
      $('.main-page').append(data);
      console.log(data);
      Interaction.bindFormButton();
      // bind back button to go to the home page
      $('.back').on("click", function(){
        $('.jobpage').remove();
        $('.main-container').show(300);
      });
    })
    .fail(function(data){
      console.log("You Failed")
    })
  },
}

var JobBox = {
  bindEvents: function() {
    $('.item').on("mouseenter", this.showIcons)
    $('.item').on("mouseleave", this.hideIcons)
  },

  showIcons: function() {
    $(this).find('.job-page-link').show()
  },

  hideIcons: function() {
    $(this).find('.job-page-link').hide()
  }
}

$(document).ready(function () {
  // Authentication.bindEvents();

  PageController.getJobthingsData();
  Utility.hideAllForms();
  LightBox.bindEvents();
  JobPage.bindEvents();

  // Interaction.bindFormButton();
  // Interaction.bindDragEvent();
  // Interaction.bindDropEvent();
  // Jobthing.bindNewJobthingButton();
  JobBox.bindEvents();
  // $('.form-container').hide()

})
