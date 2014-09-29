Authentication = {

  bindEvents: function () {
    $('.login-btn').on("click", this.renderSignIn);
    $('.registration-btn').on("click", this.renderSignUp);
  },

  renderSignIn: function() {
    var $template = $('.login_form');
    var loginForm = $template.clone().html().trim();
    $('.sign-in').append(loginForm);
    $('form').hide();
    $('form').slideDown(1000);
    $('.login-btn').hide();
  },

  renderSignUp: function() {
    var $template = $('.registration_form');
    var registrationForm = $template.clone().html().trim();
    $('.sign-up').append(registrationForm);
    $('form').hide();
    $('form').slideDown(1000);
    $('.registration-btn').hide();
  }
}

Utility = (function() {
  return {
    hideAllForms: function() {
      // Jobthing.hideForm();
      // Interview.hideForm();
      $('.form_container').hide();
    },
    removeAllForms: function() {
      Jobthing.removeForm();
      Interview.removeForm();
      Misc.removeForm();
      Outcome.removeForm();
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
    // console.log($(this))
    // debugger
    // var $url = $(this)
    $.ajax({
      url: $(this).attr('href'),
      type: "Get"
    })
    .done(function(data){
      $('.main-container').hide(200);
      // remove existing jobpage
      $('.jobpage').remove();
      $('.main-page').append(data);
      console.log(data)
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

$(document).ready(function () {
  Authentication.bindEvents();
  Utility.hideAllForms();
  LightBox.bindEvents();
  JobPage.bindEvents();
  Interaction.bindFormButton();
  Interaction.bindDragEvent();
  Interaction.bindDropEvent();
  // $('.form-container').hide()
})


