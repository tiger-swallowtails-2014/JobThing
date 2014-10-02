PageController = (function() {
  var jobthings;
  return {
    getJobthingsData: function() {
      var user_id = $('.name-title').attr('data-id');
      var request = $.ajax({url: "/users/"+user_id+"/get_jobthings", type: "GET"});
      request.done(function(data) {
        jobthings = Utility.jsonParser(data);
        PageController.assignJobthings(jobthings);
      })
    },
    assignJobthings: function(jobthings) {
      TableModel.create_tables();
      for (var i = 0; i < jobthings.length; i++) {
        if (jobthings[i].has_outcome()) {
          outcome.setJobthing(jobthings[i]);
        } else if (jobthings[i].has_misc()) {
          misc.setJobthing(jobthings[i]);
        } else if (jobthings[i].has_interview()) {
          interview.setJobthing(jobthings[i]);
        } else if (jobthings[i].has_applied()) {
          applied.setJobthing(jobthings[i]);
        } else {
          interest.setJobthing(jobthings[i]);
        }
      }
      PageController.renderJobthingViews();
    },
    renderJobthingViews: function() {
      applied.renderView();
      interest.renderView();
      interview.renderView();
      misc.renderView();
      outcome.renderView();

      PageController.bindDragEvent();
      PageController.bindDropEvents();
      TableModel.bindTableActions();
    },
    bindDragEvent: function() {
      for (var i = 0; i < jobthings.length; i++) {
        jobthings[i].bindDragEvent();
      }
    },
    bindDropEvents: function() {
      TableModel.bindDropEvents();
    }
  }
})();
