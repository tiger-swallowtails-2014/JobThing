function bindJobthingEvents() {

}

var jobThingController = (function() {
  return {
    bindButton: function() {
      $("#show_new_jobthing_form").on("click", function() {
        console.log("clicked");
      })
    }

  }
})();
