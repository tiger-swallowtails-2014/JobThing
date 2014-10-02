$(document).ready(function () {
  PageController.getJobthingsData();
  Utility.hideAllForms();
  LightBox.bindEvents();
  JobPage.bindEvents();
  NewJobthing.bindNewJobthingButton();
  JobBox.bindEvents();
})
