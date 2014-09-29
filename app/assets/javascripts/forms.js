LightBox = (function() {
  return {
    bindEvents: function () {
      $('.close-form').on('click', this.closeForm);
    },
    renderForm: function () {
      $('.main-container').css('opacity', '0.1');
      $('.form_container').toggle();
    },
    closeForm: function() {
      $('.main-container').css('opacity', 1);
      $('.form_container').toggle();
    }
  }
})();


