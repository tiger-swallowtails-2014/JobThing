TableWidget = (function () {
  return {
    create_tables: function() {
      interest = new ColModel($('.interest-table'), 'interest');
      applied = new ColModel('.applied-table', "applied");
      interview = new ColModel($('.interview-table'), "interview");
      misc = new ColModel($('.misc-table'), "misc");
      outcome = new ColModel($('.outcome-table'), "outcome");
    },
    bindDropEvents: function() {
      applied.bindDropEvent();
      interest.bindDropEvent();
      interview.bindDropEvent();
      misc.bindDropEvent();
      outcome.bindDropEvent();
    },
    bindTableActions: function() {
      applied.actions = function(jobthing) {
        Utility.sendRequest(jobthing.url_interview_delete(), "GET");
        Utility.sendRequest(jobthing.url_misc_delete(), "GET");
        Utility.sendRequest(jobthing.url_outcome_delete(), "DELETE");

        Utility.sendRequest(jobthing.url_applied_create(), "POST");
      }

      interest.actions = function(jobthing) {
        Utility.sendRequest(jobthing.url_interview_delete(), "GET");
        Utility.sendRequest(jobthing.url_misc_delete(), "GET");
        Utility.sendRequest(jobthing.url_outcome_delete(), "DELETE");
        Utility.sendRequest(jobthing.url_applied_delete(), "DELETE");
      }

      interview.actions = function(jobthing) {
        Utility.sendRequest(jobthing.url_misc_delete(), "GET");
        Utility.sendRequest(jobthing.url_outcome_delete(), "DELETE");
        interview.renderForm(jobthing.url_interview_form());
      }

      misc.actions = function(jobthing) {
        Utility.sendRequest(jobthing.url_outcome_delete(), "DELETE");
        misc.renderForm(jobthing.url_misc_form());
      }

      outcome.actions = function(jobthing) {
        outcome.renderForm(jobthing.url_outcome_form());
      }
    }
  }
})();

