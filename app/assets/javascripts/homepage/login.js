var logIn = {

  bindEvents: function(){
    $('.signin form').on('ajax:success', this.processLogIn)
    $('.signin form').on('ajax:error', this.logInError)
  },
  logInError: function(e,data){
    $('.errormsg').remove()
    var data = "<p><span class='errormsg' style='color: red;'>Either your username isn't correct, your password isn't correct, or both are totally wrong. Definitely both. Try again.</span></p>"
    $('.loginform').append(data)
  },
  processLogIn: function(e,data){
    window.location.href = "/users/" + data.id + ""
  }
}

$(document).ready(function () {
  logIn.bindEvents();
})
