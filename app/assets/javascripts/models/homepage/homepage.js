var navBar = {

  bindEvents: function(){
    $('.sign-in-btn').on("click", this.signIn)
    $('.sign-up-btn').on("click", this.signUp)
    $('.example-btn').on("click", this.renderExample)
    $('.home').on("click", this.renderHome)
  },
  renderExample: function(){
    console.log("Rendering an example!")
    $('.titlebar').hide()
    $('.loginform').hide()
    $('.signupform').hide()
    $('.example').show()
  },
  signIn: function(){
    $('.titlebar').hide()
    $('.signupform').hide()
    $('.example').hide()
    $('.loginform').show()
  },
  signUp: function(){
    $('.titlebar').hide()
    $('.loginform').hide()
    $('.example').hide()
    $('.signupform').show()
  },
  renderHome: function(){
    $('.titlebar').show()
    $('.loginform').hide()
    $('.example').hide()
    $('.signupform').hide()
  }

}

$(document).ready(function () {
  navBar.bindEvents();
})