// Authentication = {

  // bindEvents: function () {
  //   $('.login-btn').on("click", this.renderSignIn);
  //   $('.registration-btn').on("click", this.renderSignUp);
  // },

  // renderSignIn: function() {
  //   var $template = $('.login_form');
  //   var loginForm = $template.clone().html().trim();
  //   $('.sign-in').append(loginForm);
  //   $('form').hide();
  //   $('form').slideDown(1000);
  //   $('.login-btn').hide();
  // },

  // renderSignUp: function() {
  //   var $template = $('.registration_form');
  //   var registrationForm = $template.clone().html().trim();
  //   $('.sign-up').append(registrationForm);
  //   $('form').hide();
  //   $('form').slideDown(1000);
  //   $('.registration-btn').hide();
  // }
// }

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
    })()
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
  Authentication.bindEvents();
  Utility.hideAllForms();
  LightBox.bindEvents();
  JobPage.bindEvents();
  JobBox.bindEvents();
  Interaction.bindFormButton();
  Interaction.bindDragEvent();
  Interaction.bindDropEvent();
  Jobthing.bindNewJobthingButton();
  // $('.form-container').hide()
})
