var navBar = {

  bindEvents: function(){
    $('.job-thing-example').on("click", this.renderExample)
    $('.sign-in-btn').on("click", this.signIn)
  },
  renderExample: function(){
    console.log("Rendering an example!")
    $('.titlebar').hide()
    $('.example-div').hide()
  },
  signIn: function(){
    $('.titlebar').hide()
  }

}

$(document).ready(function () {
  navBar.bindEvents();
})