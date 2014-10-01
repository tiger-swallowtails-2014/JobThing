Jobthing = {};

Jobthing.properties = function(job_object) {
    this.user_id = job_object.jobthing.user_id
    this.job_link = job_object.jobthing.job_link
    this.company = job_object.jobthing.company
    this.position = job_object.jobthing.position

    this.jobthing_id = job_object.jobthing.id

    // array of objects
    this.applied = job_object.applied
    this.interview = job_object.interview
    this.misc = job_object.misc
    this.outcome = job_object.outcome

    this.has_applied = function() {return job_object.applied.length != 0}
    this.has_interview = function() {return job_object.interview.length != 0}
    this.has_misc = function() {return job_object.misc.length != 0}
    this.has_outcome = function() {return job_object.outcome.length != 0}

    this.type = function() {

    }

    this.url_base = function() {return "/users/" + this.user_id + "/jobthings/" + this.jobthing_id};
    this.url_interview_form = function() {return this.url_base() + "/interviews/new"};
    this.url_misc_form = function() {return this.url_base() + "/miscjobthings/new"};
    this.url_outcome_form = function() {return this.url_base() + "/outcomes/new"};

    this.url_applied_create = function() {return this.url_base() + "/applieds"}

    this.url_applied_delete = function() {
      if (this.has_applied) {
        return this.url_base() + "/applieds/" + this.applied_id
      }
    };
    // delete all interviews
    this.url_interview_delete = function() {return this.url_base() + "/destroy_interviews"}
    // delete all miscs
    this.url_misc_delete = function() {return this.url_base() + "/destroy_miscs"}
    this.url_outcome_delete = function() {return this.url_base() + "/outcomes/" + this.outcome.id}

    this.view = function() {
      var button = "<button type='button' class='btn btn-primary btn-xs job-page-link' action='"+this.url_base()+"'>View</button>";
      var jobthing_view = "<div class='item' id='"+this.jobthing_id+"''><div>"+this.company+button+"</div></div>";
      return jobthing_view
    }

    this.bindDragEvent = function() {
      var that = this;

      $('#'+this.jobthing_id).draggable({
        helper: 'clone',
        start: function() {
          console.log("dragging");
          JOBTHING = that;
          Utility.elementCloner.setClone($(this));
        }
      })
    }

}



