Utility = (function() {
  return {
    hideAllForms: function() {
      $('.form_container').hide();
    },
    removeAllForms: function() {
      $('#new_interview').remove();
      $('#new_miscjobthing').remove();
      $('#new_outcome').remove();
      $('#new_jobthing').remove();
      $('.applied-form').remove();

      Note.removeForm();
      Contact.removeForm();
    },
    elementCloner: (function() {
      var clonedItem;
      var original;
      return {
        setClone: function(element) {
          original = element;
          clonedItem = element.clone();
        },
        getClone: function() {
          return clonedItem;
        },
        getOriginal: function() {
          return original;
        }
      }
    })(),
    jsonParser: function(jobthings_data) {
      var jobthings = [];
      for (var i = 0; i < jobthings_data.length; i++) {
        var jobthing = new Jobthing.properties(jobthings_data[i]);
        jobthings.push(jobthing);
      };
      return jobthings;
    },
    sendRequest: function(url, type, params) {
      var request = $.ajax({url: url, type: type, data: params});
      request.done(function() {
        console.log("success");
      })
    }
  }
})();
