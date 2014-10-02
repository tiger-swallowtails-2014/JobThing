JobPage = {
  bindEvents: function () {
    $("body").on("click", "#job-page-link", this.renderJobPage);
  },
  renderJobPage: function(event) {
    event.preventDefault();
      $.ajax({
        url: $(this).attr('action'),
        type: "Get"
      })
    .done(function(data){
      $('.main-container').hide(200);
      $('.jobpage').remove();
      $('.main-page').append(data);
      Interaction.bindFormButton();
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
