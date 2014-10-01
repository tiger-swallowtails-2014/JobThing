TableWidget = (function () {
  // var tables = [];
  return {
    create_tables: function() {
      interest = new ColModel($('.interest-table'), 'interest');
      applied = new ColModel($('.applied-table'), "applied");
      interview = new ColModel($('.interview-table'), "interview");
      // tables.push(interest)
      // tables.push(applied)
    },
    bindDropEvents: function() {
      // for (var i = 0; i < tables.length; i++) {
      //   tables[i].bindDropEvent();
      // }
      applied.bindDropEvent();
      interest.bindDropEvent();
      interview.bindDropEvent();
    },
    bindTableActions: function() {
      applied.actions = function(jobthing) {
        console.log("applied action");
        if (jobthing.has_applied === true) {
          Utility.sendRequest(jobthing.url_interview_delete(), "GET");
          Utility.sendRequest(jobthing.url_misc_delete(), "GET");
          Utility.sendRequest(jobthing.url_outcome_delete(), "DELETE");
        } else {
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

      interview.actions = function(jobthing) {
        console.log("interview action");
        if (jobthing.has_interview === true) {
          Utility.sendRequest(jobthing.url_misc_delete(), "GET");
          Utility.sendRequest(jobthing.url_outcome_delete(), "DELETE");
        } else {
          Utility.sendRequest(jobthing.url_misc_delete(), "GET");
          Utility.sendRequest(jobthing.url_outcome_delete(), "DELETE");
          interview.renderForm(jobthing.url_interview_form());
        }
      }
    }
  }
})();

