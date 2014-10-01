PageController = (function() {
  var jobthings;
  return {
    getJobthingsData: function() {
      var user_id = $('.name-title').attr('data-id');
      var request = $.ajax({url: "/users/"+user_id+"/get_jobthings", type: "GET"});
      request.done(function(data) {
        // construct objects
        jobthings = Utility.jsonParser(data);
        PageController.assignJobthings(jobthings);
      })
    },
    // assign
    assignJobthings: function(jobthings) {
      TableWidget.create_tables();
      for (var i = 0; i < jobthings.length; i++) {

        // if (jobthings[i].has_outcome()) {
        //   // assign to outcome table
        // } else if (jobthings[i].has_misc) {
        //   // misc table
        // } else if (jobthings[i].has_interview) {
        //   // interview
        // } else
        if (jobthings[i].has_applied()) {
          applied.setJobthing(jobthings[i]);
        } else {
          interest.setJobthing(jobthings[i]);
        }
      }
      PageController.renderJobthingViews();
    },
    renderJobthingViews: function() {
      // call each table model
      applied.renderView();
      interest.renderView();
      PageController.bindDragEvent();
      PageController.bindDropEvents();
      TableWidget.bindTableActions();
    },
    bindDragEvent: function() {
      for (var i = 0; i < jobthings.length; i++) {
        jobthings[i].bindDragEvent();
      }
    },
    bindDropEvents: function() {
      TableWidget.bindDropEvents();
    }
  }
})();
