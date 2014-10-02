var JobBox = {
  bindEvents: function() {
    $('body').on("mouseenter", '.item', this.showIcons)
    $('body').on("mouseleave", '.item', this.hideIcons)
  },

  showIcons: function() {
    $(this).find('.job-page-link').show()
  },

  hideIcons: function() {
    $(this).find('.job-page-link').hide()
  }
}
