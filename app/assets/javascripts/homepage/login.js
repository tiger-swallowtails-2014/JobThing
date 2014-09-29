// var logIn = {
//   bindEvents: function(){
//     $('#login').on("submit", this.logInUser)
//   },
//   logInUser: function(e){
//     e.preventDefault()
//     var logindata = $(this).serialize()
//     $.ajax({
//       url: '/login',
//       type: 'post',
//       data: logindata
//     }).done(function(logindata){console.log("success!")})
//   }
// }

// $(document).ready(function () {
//   logIn.bindEvents();
// })