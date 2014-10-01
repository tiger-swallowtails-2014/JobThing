TableWidget = (function () {
  // var tables = [];
  return {
    create_tables: function() {
      interest = new ColModel($('.interest-table'), 'interest');
      applied = new ColModel($('.applied-table'), "applied");
      // tables.push(interest)
      // tables.push(applied)
    },
    bindDropEvents: function() {
      // for (var i = 0; i < tables.length; i++) {
      //   tables[i].bindDropEvent();
      // }
      applied.bindDropEvent();
      interest.bindDropEvent();
    },
    bindTableActions: function() {
      applied.actions = function(jobthing) {
        console.log("applied action");
        console.log(jobthing.has_applied);
        if (jobthing.has_applied === true) {
          console.log("has applied")
          Utility.sendRequest(jobthing.url_interview_delete(), "GET");
          Utility.sendRequest(jobthing.url_misc_delete(), "GET");
          Utility.sendRequest(jobthing.url_outcome_delete(), "DELETE");
        } else {
          console.log("no applied")
          Utility.sendRequest(jobthing.url_interview_delete(), "GET");
          Utility.sendRequest(jobthing.url_misc_delete(), "GET");
          Utility.sendRequest(jobthing.url_outcome_delete(), "DELETE");

          Utility.sendRequest(jobthing.url_applied_create(), "POST");
        }
      }
      interest.actions = function(jobthing) {
        console.log("interest action");
        Utility.sendRequest(jobthing.url_interview_delete(), "GET");
        Utility.sendRequest(jobthing.url_misc_delete(), "GET");
        Utility.sendRequest(jobthing.url_outcome_delete(), "DELETE");
        Utility.sendRequest(jobthing.url_applied_delete(), "DELETE");
      }
    }
  }
})();

