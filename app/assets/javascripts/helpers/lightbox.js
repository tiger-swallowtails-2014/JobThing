LightBox = (function() {
  return {
    bindEvents: function () {
      $('.close-form').on('click', this.closeForm);
    },
    renderForm: function () {
      $('body').css('background-color', '#909090')
      $('.main-container').css('opacity', '0.1');
      $('.jobpage').css('opacity', '0.1');
      $('.form_container').toggle();
    },
    closeForm: function() {
      $('body').css('background-color', '#FFFFFF')
      $('.main-container').css('opacity', 1);
      $('.jobpage').css('opacity', 1);
      $('.form_container').toggle();
    }
  }
})();


