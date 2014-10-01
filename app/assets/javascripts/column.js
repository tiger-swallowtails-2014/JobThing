
function ColModel(table_elem, type) {
  this.jobthings = [];
  this.table_elem = table_elem;
  this.type = type
}

ColModel.prototype.setJobthing = function(jobthing_obj) {
  this.jobthings.push(jobthing_obj);
}

ColModel.prototype.renderView = function() {
  for (var i = 0; i< this.jobthings.length; i++) {
    this.table_elem.append(this.jobthings[i].view());
  }
}

ColModel.prototype.bindDropEvent = function() {
  console.log(this.table_elem)
  this.table_elem.droppable({
    drop: function() {
      console.log("dropped");
      var element = Utility.elementCloner.getClone();
      $(this).append(element);
      PageController.bindDragEvent();
      view_removeFromOrigin();


    }
  })
}
function view_removeFromOrigin() {
  Utility.elementCloner.getOriginal().remove();
}
