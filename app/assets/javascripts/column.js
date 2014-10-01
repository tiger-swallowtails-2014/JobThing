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
    $(this.jobthings[i].view()).appendTo(this.table_elem);
  }
}

ColModel.prototype.bindDropEvent = function() {
  var table = this;
  $(this.table_elem).droppable({
    drop: function() {
      var element = Utility.elementCloner.getClone();
      $(this).append(element);
      view_removeFromOrigin();
      table.actions(JOBTHING);
      PageController.bindDragEvent();
    }
  })
}

ColModel.prototype.renderForm = function(url) {
  var request = $.ajax({url: url, type: "GET"});
  request.done(function(data) {
    Utility.removeAllForms();
    $('.form_container').append(data);
    LightBox.renderForm();
    PageController.bindDragEvent();
  })
}

function view_removeFromOrigin() {
  Utility.elementCloner.getOriginal().remove();
}
