var Authentication = {

  bindEvents: function () {
    $('.login-btn').on("click", this.renderSignIn)
    $('.registration-btn').on("click", this.renderSignUp)
  },

  renderSignIn: function() {
    var $template = $('.login_form')
    var loginForm = $template.clone().html().trim()
    $('.sign-in').append(loginForm)
    $('form').hide()
    $('form').slideDown(1000)
    $('.login-btn').hide()
  },

  renderSignUp: function() {
    var $template = $('.registration_form')
    var registrationForm = $template.clone().html().trim()
    $('.sign-up').append(registrationForm)
    $('form').hide()
    $('form').slideDown(1000)
    $('.registration-btn').hide()
  }
}

var Utility = (function() {
  return {
    hideAllForms: function() {
      JobThingController.hideForm();
    },
    removeAllForms: function() {
      JobThingController.removeForm();
    }
  }
})();

$(document).ready(function () {
  Authentication.bindEvents();
  JobThingController.bindButton();
  Utility.hideAllForms();
  LightBox.bindEvents();
  // $('.form-container').hide()
})
