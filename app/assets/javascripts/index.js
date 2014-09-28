var Authentication = {

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

var Utility = (function() {
  return {
    hideAllForms: function() {
      JobthingController.hideForm();
    },
    removeAllForms: function() {
      JobthingController.removeForm();
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

var JobPage = {

  bindEvents: function () {
    $('.item').on("click", this.renderJobPage);
  },

  renderJobPage: function() {
    var $template = $('.job-page');
    var jobPage = $template.clone().html().trim();
    $('.main-container').hide(1000);
    $('.main-page').append(jobPage);
  },
}

$(document).ready(function () {
  Authentication.bindEvents();
  JobthingController.bindButton();
  Utility.hideAllForms();
  LightBox.bindEvents();
  InteractionController.bindDragEvent();
  InteractionController.bindDropEvent();
  JobPage.bindEvents();
  // $('.form-container').hide()
})
