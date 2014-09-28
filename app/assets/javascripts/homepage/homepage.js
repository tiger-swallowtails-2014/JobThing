var navBar = {

  bindEvents: function(){
    $('.job-thing-example').on("click", this.renderExample)
  },
  renderExample: function(){
    console.log("Rendering an example!")
    $('.titlebar').hide()
    $('.example-div').hide()

  }

}

$(document).ready(function () {
  navBar.bindEvents();
})