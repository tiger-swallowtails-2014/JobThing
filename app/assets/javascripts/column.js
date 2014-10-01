
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
  var table = this;
  this.table_elem.droppable({
    drop: function() {
      console.log("dropped " + JOBTHING.company + " on " + table.type);
      var element = Utility.elementCloner.getClone();
      $(this).append(element);
      view_removeFromOrigin();
      check_type(table);
      PageController.bindDragEvent();
    }
  })
}

ColModel.prototype.renderForm = function(url) {
  var request = $.ajax({url: url, type: "GET"});
  request.done(function(data) {
    console.log("success");
    console.log(data);
    Utility.removeAllForms();
    $('.form_container').append(data);
    LightBox.renderForm();
    PageController.bindDragEvent();
  })
}
function view_removeFromOrigin() {
  Utility.elementCloner.getOriginal().remove();
}

function check_type(table) {
  if (table.type === "applied") {
    table.actions(JOBTHING);
  } else if (table.type === "interest") {
    table.actions(JOBTHING);
  } else if (table.type === "interview") {
    table.actions(JOBTHING);
  } else if (table.type === "misc") {
    table.actions(JOBTHING);
  } else if (table.type === "outcome") {
    table.actions(JOBTHING);
  }
}
