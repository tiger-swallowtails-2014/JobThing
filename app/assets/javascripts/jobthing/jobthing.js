Jobthing = function(job_object) {
    this.user_id = job_object.jobthing.user_id
    this.job_link = job_object.jobthing.job_link
    this.company = job_object.jobthing.company
    this.position = job_object.jobthing.position

    this.jobthing_id = job_object.jobthing_id

    // array of objects
    this.applied = job_object.applied
    this.interview = job_object.interview
    this.misc = job_object.misc
    this.outcome = job_object.outcome

    this.has_applied = function() {return job_object.applied.length != 0}
    this.has_interview = function() {return job_object.interview.length != 0}
    this.has_misc = function() {return job_object.misc.length != 0}
    this.has_outcome = function() {return job_object.outcome.length != 0}

    var url_base = "/users/" + this.user_id + "/jobthings/" + this.jobthing_id
    this.url_interview_form = function() {return url_base + "/interviews/new"};
    this.url_misc_form = function() {return url_base + "/miscjobthings/new"};
    this.url_outcome_form = function() {return url_base + "/outcomes/new"};

    this.url_applied_create = function() {return url_base + "/applieds"}

    this.url_applied_delete = function() {
      if (this.has_applied) {
        return url_base + "/applieds/" + this.applied_id
      }
    };
    // delete all interviews
    this.url_interview_delete = function() {return url_base + "/destroy_interviews"}
    // delete all miscs
    this.url_misc_delete = function() {return url_base + "/destroy_miscs"}
    this.url_outcome_delete = function() {return url_base + "/outcomes/" + this.outcome_id}
};


