TableController = (function () {
  return {
    create_tables: function() {
      interest = new ColModel($('.interest-table'), 'interest');
      applied = new ColModel('.applied-table', "applied");
      interview = new ColModel($('.interview-table'), "interview");
      misc = new ColModel($('.misc-table'), "misc");
      outcome = new ColModel($('.outcome-table'), "outcome");
      trashcan = new ColModel($('.trash-can'), "trashcan");
    },
    bindDropEvents: function() {
      applied.bindDropEvent();
      interest.bindDropEvent();
      interview.bindDropEvent();
      misc.bindDropEvent();
      outcome.bindDropEvent();
      $('.trash-can').droppable({drop: function() {trashcan.actions(JOBTHING)}});
    },
    bindTableActions: function() {
      applied.actions = function(jobthing) {
        Utility.sendRequest(jobthing.url_interview_delete(), "GET");
        Utility.sendRequest(jobthing.url_misc_delete(), "GET");
        Utility.sendRequest(jobthing.url_outcome_delete(), "GET");
        Utility.sendRequest(jobthing.url_applied_create(), "POST");
      }

      interest.actions = function(jobthing) {
        Utility.sendRequest(jobthing.url_interview_delete(), "GET");
        Utility.sendRequest(jobthing.url_misc_delete(), "GET");
        Utility.sendRequest(jobthing.url_outcome_delete(), "GET");
        Utility.sendRequest(jobthing.url_applied_delete(), "GET");
      }

      interview.actions = function(jobthing) {
        Utility.sendRequest(jobthing.url_misc_delete(), "GET");
        Utility.sendRequest(jobthing.url_outcome_delete(), "GET");
        interview.renderForm(jobthing.url_interview_form());
      }

      misc.actions = function(jobthing) {
        Utility.sendRequest(jobthing.url_outcome_delete(), "GET");
        misc.renderForm(jobthing.url_misc_form());
      }

      outcome.actions = function(jobthing) {
        outcome.renderForm(jobthing.url_outcome_form());
      }

      trashcan.actions = function(jobthing) {
        if (confirm("sure?")) {
            console.log("dropped");
            view_removeFromOrigin();
            Utility.sendRequest(jobthing.url_interview_delete(), "GET");
            Utility.sendRequest(jobthing.url_misc_delete(), "GET");
            Utility.sendRequest(jobthing.url_outcome_delete(), "GET");
            Utility.sendRequest(jobthing.url_applied_create(), "POST");
            Utility.sendRequest(jobthing.url_base(), "DELETE");
          }
      }

    }
  }
})();

