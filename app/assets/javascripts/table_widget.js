TableWidget = (function () {
  var tables = [];
  return {
    create_tables: function() {
      applied = new ColModel($('.applied-table'), "applied");
      // create other tables
      tables.push(applied);
    },

    forEachTable: function() {
          for (var i=0; i<tables.length; i++) {
            var that = tables[i];
            tables[i].bindDropEvent = function(){
              var table = this.table_elem;
                table.droppable({
                activate: function() {
                  // hightlight
                  console.log("active");
                },
                deactivate: function() {
                  // toggle highlight
                },
                drop: function() {
                  // confirm with user
                  var element = Utility.elementCloner.getClone();
                  view_removeFromOrigin();
                  table.append(element);
                  PageController.bindDragEvent();
                  check_type(that);
              // Interaction.bindDragEvent();
              // JobPage.bindEvents();
                }


              })
            }
          }
    // bindDropEvents
    }
  }
})();
function check_type(table) {
  if (table.type == "applied") {
    applied_requests()
  }
}

function applied_requests() {
  if (JOBTHING.has_applied) {
    console.log(JOBTHING)
    // remove interviews
    Utility.sendRequest(JOBTHING.url_interview_delete(), "GET");
    // remove misc
    Utility.sendRequest(JOBTHING.url_misc_delete(), "GET");
    // remove outcome
    Utility.sendRequest(JOBTHING.url_outcome_delete(), "DELETE")
  } else {
    // create applied
    Utility.sendRequest(JOBTHING.url_applied_create(), "POST")
  }
}
