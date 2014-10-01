
function ColModel(table_elem, type) {
  this.jobthings = [];
  this.table_elem = table_elem;
  this.type = type
}

ColModel.prototype.renderView = function() {
  for (var i = 0; i< this.jobthings.length; i++) {
    this.table_elem.append(this.jobthings[i].view());
  }
}

ColModel.prototype.setJobthing = function(jobthing_obj) {
  this.jobthings.push(jobthing_obj);
}

// ColModel.prototype.bindDropEvent

function view_removeFromOrigin() {
  Utility.elementCloner.getOriginal().remove();
}


  // applied.dropJob = function(){

  //   // var jobThing = Utility.elementCloner.getClone()
  //   // this.renderView(selector, jobThing)
  //   // this.createApplied(jobThing)
  // }
  // applied.bindDropEvent('.applied-table', this.dropJob)

  // console.log(applied.jobthings)

