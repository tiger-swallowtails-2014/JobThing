Interest = (function() {
  return {
    bindDropEvent: function() {
      $('.interest-table').droppable({
        activate: function() {
          // hightlight
          console.log("active");
        },
        deactivate: function() {
          // toggle highlight
        },
        drop: function() {
          // confirm with user

          console.log("dropped");
          var element = Utility.elementCloner.getClone();
          $('.interest-table tbody').append(element);
          db_removeApplied(element);
          db_removeAllInterviews(element);
          db_removeMisc(element);
          db_removeOutcome(element);
          view_removeFromOrigin();
          // view_removeApplied(element);
          Interaction.bindDragEvent();
          JobPage.bindEvents();
        }
      })
    }
  }
})();

// function view_removeApplied() {
//   Utility.elementCloner.getOriginal().remove();
// };

function db_removeApplied(element) {
  var request = $.ajax({
    url: element.find('#delete-applied-link').attr('action'),
    type: "DELETE"
  });
}

function db_removeMisc(element) {
  var request = $.ajax({
    url: element.find('#delete-miscs-link').attr('action'),
    type: "GET"
  });
}

function db_removeOutcome(element) {
  var request = $.ajax({
    url: element.find('#delete-outcome-link').attr('action'),
    type: "DELETE"
  });
}

function db_removeJobthing(element) {
  var request = $.ajax({
    url: element.find("#delete-jobthing-link").attr('action'),
    type: "DELETE"
  })
}
