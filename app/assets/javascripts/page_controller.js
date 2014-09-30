PageController = (function() {
  var jobthings = [];
  return {
    getJobthingsData: function() {
      var user_id = $('.name-title').attr('data-id');
      var request = $.ajax({url: "/users/"+user_id+"/get_jobthings", type: "GET"});
      request.done(function(data) {
        // construct objects
        PageController.assignJobthings(Utility.jsonParser(data));
      })
    },
    // assign
    assignJobthings: function(jobthings) {
      console.log("called")
      // debugger
      applied = new ColModel($('.applied-table'));
      for (var i = 0; i < jobthings.length; i++) {
        // console.log(jobthings[i].url_base())
        // if (jobthings[i].has_outcome()) {
        //   // assign to outcome table
        // } else if (jobthings[i].has_misc) {
        //   // misc table
        // } else if (jobthings[i].has_interview) {
        //   // interview
        // } else if (jobthings[i].has_applied) {
        //   // applied
          applied.setJobthing(jobthings[i]);
        // } else {
        //   // jobthings
        // }
      }
      PageController.renderJobthingViews();
    },
    renderJobthingViews: function() {
      // call each table model
      applied.renderView();
    },
    bindDragEvent: function() {
      // bind jobthing drag event
    },
    bindDropEvents: function() {
      // bind table drop events
    }
  }
})();
