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
      console.log("called")
      // debugger
      TableWidget.create_tables();
      for (var i = 0; i < jobthings.length; i++) {
        // console.log(jobthings[i].url_base())
        // if (jobthings[i].has_outcome()) {
        //   // assign to outcome table
        // } else if (jobthings[i].has_misc) {
        //   // misc table
        // } else if (jobthings[i].has_interview) {
        //   // interview
        // } else
        if (jobthings[i].has_applied()) {
        //   // applied
          applied.setJobthing(jobthings[i]);
        }
        // else {
        //   // jobthings
        // }
      }
      PageController.renderJobthingViews();
    },
    renderJobthingViews: function() {
      // call each table model
      applied.renderView();
      PageController.bindDragEvent();
      PageController.bindDropEvents();
    },
    bindDragEvent: function() {
      // bind jobthing drag event
      // var items = $('.item');
      // items.draggable({
      //   helper: 'clone',
      //   start: function() {

      //     Utility.elementCloner.setClone($(this));
      //   }
      // })
      console.log("about to bind")
      for (var i = 0; i < jobthings.length; i++) {
        jobthings[i].bindDragEvent();
      }
    },
    bindDropEvents: function() {
      // bind table drop events
      TableWidget.forEachTable();
      applied.bindDropEvent()
    }
  }
})();
