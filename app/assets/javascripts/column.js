ColModel = function(table_elem) {
  this.jobthings = []
  this.table_elem = table_elem
}
ColModel.prototype.bindDropEvent = function(selector, callback){
  this.selector = selector;
  $(selector).droppable({
    drop: function(event, ui) { callback }
  })
}

ColModel.prototype.renderView = function() {
  for (var i = 0; i< this.jobthings.length; i++) {
    var button = "<button type='button' class='btn btn-primary btn-xs job-page-link style='dsiplay: none' action='"+jobthings[i].url_base+"'>View</button>"
    var jobthing_view = "<div class='item'><div>"+jobthings[i].company+button+"</div></div>"
    this.table_elem.append(jobthing_view);
  }
}





var applied = new ColModel($('.applied-table'));

applied.setJobthing = function(jobthing_obj) {
  this.jobthings.push(jobthing_obj);
}
applied.createApplied = function(jobThing){

}

applied.dropJob = function(){

  // var jobThing = Utility.elementCloner.getClone()
  // this.renderView(selector, jobThing)
  // this.createApplied(jobThing)
}
applied.bindDropEvent('.applied-table', this.dropJob)


