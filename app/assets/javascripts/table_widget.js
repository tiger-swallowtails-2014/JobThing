TableWidget = (function () {
  var tables = [];
  return {
    create_tables: function() {
      interest = new ColModel($('.interest-table'), 'interest');
      applied = new ColModel($('.applied-table'), "applied");
      tables.push(interest)
      tables.push(applied)
    },

    bindDropEvents: function() {
      for (var i = 0; i < tables.length; i++) {
        tables[i].bindDropEvent();
      }
    }
  }
})();
