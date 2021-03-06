Jobthing = {};

Jobthing.properties = function(job_object) {
  this.user_id = job_object.jobthing.user_id
  this.job_link = job_object.jobthing.job_link
  this.company = job_object.jobthing.company
  this.position = job_object.jobthing.position

  this.jobthing_id = job_object.jobthing.id

  this.applied = job_object.applied
  this.interview = job_object.interview
  this.misc = job_object.misc
  this.outcome = job_object.outcome

  this.has_applied = function() {return job_object.applied != null}
  this.has_interview = function() {return job_object.interview.length != 0}
  this.has_misc = function() {return job_object.misc.length != 0}
  this.has_outcome = function() {return job_object.outcome != null}

  this.url_base = function() {return "/users/" + this.user_id + "/jobthings/" + this.jobthing_id};
  this.url_applied_form = function() {return this.url_base() + "/applieds/new"};
  this.url_interview_form = function() {return this.url_base() + "/interviews/new"};
  this.url_misc_form = function() {return this.url_base() + "/miscjobthings/new"};
  this.url_outcome_form = function() {return this.url_base() + "/outcomes/new"};

  this.url_applied_create = function() {return this.url_base() + "/applieds"}
  this.url_applied_delete = function() {
    return this.url_base() + "/destroy_applied";
  };

  this.url_interview_delete = function() {return this.url_base() + "/destroy_interviews"}
  this.url_misc_delete = function() {return this.url_base() + "/destroy_miscs"}
  this.url_outcome_delete = function() {
    return this.url_base() + "/destroy_outcome";
  };

  this.view = function() {
    var button = "<button type='button' class='btn btn-primary btn-xs job-page-link' id='job-page-link' style='display: none' action='"+this.url_base()+"'>View</button>";
    if (this.has_outcome() && this.outcome.success === true) {
      var jobthing_view = "<div style='background-color:#CBE0FF' class='item' id='"+this.jobthing_id+"''>"+this.company+button+"</div>";
    } else if (this.has_outcome() && this.outcome.success === false) {
      var jobthing_view = "<div style='background-color:#F4D4C9'class='item' id='"+this.jobthing_id+"''><div>"+this.company+button+"</div></div>";
    } else {
      var jobthing_view = "<div class='item' id='"+this.jobthing_id+"''><div>"+this.company+button+"</div></div>";
    }
    return jobthing_view
  }

  this.bindDragEvent = function() {
    var that = this;
    $('#'+this.jobthing_id).draggable({
      helper: 'clone',
      start: function() {
        JOBTHING = that;
        Utility.elementCloner.setClone($(this));
        Utility.elementCloner.getOriginal().hide();
      },
      stop: function() {
        Utility.elementCloner.getOriginal().show();
      }
    })
  }

}



